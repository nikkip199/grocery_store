const {
  productModel,
  productImgModel,
  categoryModel,
  reviews_ratingModel,
  subcategoryModel,
  orderModel,
} = require("../../models/models");

const customErrorHandler = require("../../../config/customErrorHandler");
const { Op, json } = require("sequelize");
const path = require("path");
const fs = require("fs");
const { sequelize } = require("../../../config/database");

productModel.hasMany(reviews_ratingModel, {
  foreignKey: "productId",
  as: "review",
});
reviews_ratingModel.belongsTo(productModel, {
  foreignKey: "productId",
  as: "review",
});

exports.fetchAllHotDealProduct = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const { subcategory, name } = req.query;

    let whereCondition = {};

    if (name) {
      whereCondition.name = { [Op.like]: `%${name}%` };
    }

    const { count, rows: products } = await productModel.findAndCountAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: whereCondition,
      include: [
        {
          model: categoryModel,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: subcategoryModel,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: productImgModel,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      offset: offset,
      limit: limit,
    });

    if (count === 0) {
      return res.status(404).json({
        status: false,
        message: "Product not found",
      });
    }

    if (subcategory) {
      const filteredProducts = products.filter((product) =>
        product.subcategories.some((sub) => sub.subcategory === subcategory)
      );

      const modifiedProduct = filteredProducts.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        brand: product.brand,
        discount_price: product.discount_price,
        thumbnail: product.thumbnail,
        discount_percentage: product.discount_percentage,
        tag: product.tag,
        stock: product.stock,
        description: product.description,
        category: product.category,
        name :"rajat",
        subcategory: product.subcategories.map(
          (subcategory) => subcategory.subcategory
        ),
        image: product.product_images.map((image) => image.images),
      }));
      if (modifiedProduct.length === 0) {
        return res.status(404).json({
          status: false,
          message: "Product not found",
        });
      }
      const totalCount = modifiedProduct.length;
      const totalPages = Math.ceil(totalCount / limit);
      return res.status(200).json({
        status: true,
        products: modifiedProduct,
        totalPages,
        totalItems: totalCount,
        currentPage: page,
      });
    }

    const modifiedProduct = products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      brand: product.brand,
      thumbnail: product.thumbnail,
      discount_price: product.discount_price,
      discount_percentage: product.discount_percentage,
      tag: product.tag,
      stock: product.stock,
      description: product.description,
      category: product.categories.map((category) => category.name),
      subcategory: product.subcategories.map(
        (subcategory) => subcategory.subcategory
      ),
      image: product.product_images.map((image) => image.images),
    }));
    const totalCount = await productModel.count();
    const totalPages = Math.ceil(totalCount / limit);

    return res.status(200).json({
      status: true,
      products: modifiedProduct,
      totalPages,
      totalItems: totalCount,
      currentPage: page,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

exports.getSingleProduct = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ status: false, message: "product id required" });
  }

  try {
    const product = await productModel.findOne({
      where: { id: id },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },

      include: [
        {
          model: reviews_ratingModel, // Change the model name to "reviews_ratingModel"
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          as: "review", // Use the original alias "reviews_and_ratings"
        },

        {
          model: productImgModel,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });
    if (!product && product === 0) {
      return res
        .status(400)
        .json({ status: false, message: "product not found" });
    }
    return res.status(200).json({ status: true, product });
  } catch (error) {
    return next(error);
  }
};

exports.fetchAllPopularProduct = async (req, res, next) => {
  // Product Filter by subcategory
  try {
    const { subcategory } = req.query;
    const popularProducts = await orderModel.findAll({
      attributes: [
        "productId",
        [sequelize.fn("COUNT", sequelize.col("productId")), "order_count"],
      ],
      group: ["productId"],
      order: [[sequelize.literal("order_count"), "DESC"]],
    });

    let filteredProducts = popularProducts;
    let whereCondition;
    if (subcategory) {
      whereCondition = {
        "$subcategories.subcategory$": {
          [Op.like]: `%${subcategory}%`,
        },
      };
    }

    if (filteredProducts.length > 0) {
      const popularProductsData = [];
      for (const product of filteredProducts) {
        const { productId, order_count } = product.get();
        const getProduct = await productModel.findOne({
          where: { id: productId },
          attributes: { exclude: ["createdAt", "updatedAt"] },
          include: [
            {
              model: subcategoryModel,
              where: whereCondition,
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
            {
              model: productImgModel,
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
          ],
        });
        if (!getProduct) {
          // If the product is not found, continue to the next iteration
          res.status(404).json({ status: false, message: "product not found" });
          continue;
        }
        popularProductsData.push(getProduct);
      }
      const modifiedProduct = popularProductsData.map((product) => ({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        discount_price: product.discount_price,
        discount_percentage: product.discount_percentage,
        tag: product.tag,
        stock: product.stock,
        description: product.description,
        subcategories: product.subcategories.map((subcategory) => ({
          id: subcategory.id,
          subcategory: subcategory.subcategory,
        })),
        images: product.product_images.slice(0, 2).map((image) => image.images),
      }));
      return res.status(200).json({ status: true, products: modifiedProduct });
    } else {
      console.log("No orders found in the database.");
      return res
        .status(404)
        .json({ status: false, message: "No popular products found" });
    }
  } catch (error) {
    return next(error);
  }
};

exports.fetchDailyBestSellsProduct = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 4;
    const offset = (page - 1) * limit;

    const { subcategory } = req.query;
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);

    const getOrder = await orderModel.findAll({
      where: {
        createdAt: {
          [Op.gte]: startOfDay,
          [Op.lte]: today,
        },
      },
    });

    const productQuantities = {};

    getOrder.forEach((order) => {
      const { productId, totalItems } = order;
      // Increment the total quantity for the product
      if (productQuantities[productId]) {
        productQuantities[productId] += totalItems;
      } else {
        productQuantities[productId] = totalItems;
      }
    });

    const bestSellProductIds = Object.keys(productQuantities);
    const products = await productModel.findAll({
      where: {
        id: bestSellProductIds,
      },
      attributes: { exclude: ["createdAt", "updatedAt", "status"] },
      include: [
        {
          model: subcategoryModel,

          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: productImgModel,
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
    });

    const productsWithStockAndSold = products.map((product) => {
      const { id } = product;
      const quantities = productQuantities[id] || 0;

      return {
        ...product.toJSON(),
        stock: product.stock,
        sold: quantities,
      };
    });
    // return res.json(productsWithStockAndSold);

    productsWithStockAndSold.sort((a, b) => b.sold - a.sold);
    function callProduct() {
      return (modifiedProduct = productsWithStockAndSold.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        discount_price: product.discount_price,
        discount_percentage: product.discount_percentage,
        subcategory: product.subcategories.map(
          (subcategory) => subcategory.subcategory
        ),
        images: product.product_images.slice(0, 2).map((image) => image.images),
        sold: `${product.sold}/${product.stock}`,
      })));
    }

    // if user select sub sub category === all then  work this sections
    if (subcategory === "all") {
      const newProduct = await callProduct();
      if (newProduct.length === 0) {
        return res.status(404).json({
          status: false,
          message: "No best-selling product found for today",
        });
      }
      return res.status(200).json({ status: true, products: newProduct });
    }
    // if user select  sub category like sea food  sub category name work this sections
    if (subcategory) {
      const products = await callProduct();
      if (products.length === 0) {
        return res.status(404).json({
          status: false,
          message: "No best-selling product found for today",
        });
      }

      const filteredProducts = products.filter((product) =>
        product.subcategory.includes(subcategory)
      );
      if (filteredProducts.length === 0) {
        return res.status(404).json({
          status: false,
          message: "No products found for the selected subcategory",
        });
      }
      // TODO List Sidler integrated tomorrow

      return res.status(200).json({ status: true, products: filteredProducts });
    }

    const newProduct = await callProduct();
    if (newProduct.length === 0) {
      return res.status(404).json({
        status: false,
        message: "No best-selling product found for today",
      });
    }
    return res.status(200).json({ status: true, products: newProduct });
  } catch (error) {
    return next(error);
  }
};

exports.fetchAllBestSellsProduct = async (req, res, next) => {
  // filter product
  try {
  } catch (error) {
    return next(error);
  }
};

exports.fetchAllDealsOfDayProduct = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};

exports.fetchAllTopSellingProduct = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};

exports.fetchAllTrendingProduct = async (req, res, next) => {
  try {
  } catch (error) {
    return next(error);
  }
};

exports.fetchAllRecentlyAddedProduct = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 12;
    const offset = (page - 1) * limit;
    let whereCondition = {};

    whereCondition.createdAt = { [Op.lt]: new Date() };

    const { count, rows: products } = await productModel.findAndCountAll({
      attributes: {
        exclude: ["updatedAt"],
      },
      where: whereCondition,
      include: [
        {
          model: subcategoryModel,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: productImgModel,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      offset: offset,
      limit: limit,
      order: [["createdAt", "DESC"]],
    });

    if (count === 0) {
      return res.status(404).json({
        status: false,
        message: "No recently added products found",
      });
    }

    const modifiedProduct = products.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      discount_price: product.discount_price,
      discount_percentage: product.discount_percentage,

      // subcategory: product.subcategories.map(
      //   (subcategory) => subcategory.subcategory
      // ),
      image: product.product_images[0]?.images,
    }));

    return res.status(200).json({
      status: true,
      products: modifiedProduct,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
