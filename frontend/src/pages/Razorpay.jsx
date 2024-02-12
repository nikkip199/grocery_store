import React from "react";

import { TextInput, Stack, SimpleGrid, Button } from "@mantine/core";
function Razorpay() {
  return (
    <div>
      Razorpay
      <form>
        <Stack>
          <TextInput
            label="Full name"
            h="64px"
            required
            radius="10px"
            fw={400}
            // value={fullname}
            styles={{
              label: {
                fontFamily: "lato,sans-serif",
                color: "#253D4E",
              },
            }}
            //   onChange={(e) => {
            //     setAddressInfo({
            //       ...addressInfo,
            //       fullname: e.target.value,
            //     });
            //   }}
          />
          <TextInput
            label="Phone"
            required
            h="64px"
            // value={contact}
            radius="10px"
            fw={400}
            styles={{
              label: {
                fontFamily: "lato,sans-serif",
                color: "#253D4E",
              },
            }}
            //   onChange={(e) => {
            //     setAddressInfo({
            //       ...addressInfo,
            //       contact: e.target.value,
            //     });
            //   }}
          />

          {/* </SimpleGrid> */}
          <TextInput
            label="Office Address(Optional)"
            h="64px"
            // value={ddressType}
            radius="10px"
            fw={400}
            styles={{
              label: {
                fontFamily: "lato,sans-serif",
                color: "#253D4E",
              },
            }}
            //   onChange={(e) => {
            //     setAddressInfo({
            //       ...addressInfo,
            //       addressType: e.target.value,
            //     });
            //   }}
          />
          <TextInput
            label="Street address"
            placeholder="House number and street name"
            h="64px"
            // value={address}
            required
            radius="10px"
            fw={400}
            styles={{
              label: {
                fontFamily: "lato,sans-serif",
                color: "#253D4E",
              },
            }}
            //   onChange={(e) => {
            //     setAddressInfo({
            //       ...addressInfo,
            //       address: e.target.value,
            //     });
            //   }}
          />

          <TextInput
            label="Post Code"
            required
            // value={postcode}
            h="64px"
            radius="10px"
            fw={400}
            styles={{
              label: {
                fontFamily: "lato,sans-serif",
                color: "#253D4E",
              },
            }}
            //   onChange={(e) => {
            //     setAddressInfo({
            //       ...addressInfo,
            //       postcode: e.target.value,
            //     });
            //   }}
          />
          <SimpleGrid cols={3}>
            <TextInput
              label="Town/City"
              h="64px"
              radius="10px"
              // value={ city}
              fw={400}
              styles={{
                label: {
                  fontFamily: "lato,sans-serif",
                  color: "#253D4E",
                },
              }}
              // onChange={(e) => {
              //   setAddressInfo({
              //     ...addressInfo,
              //     city: e.target.value,
              //   });
              // }}
            />
            <TextInput
              label="State"
              required
              h="64px"
              // value={state}
              radius="10px"
              fw={400}
              styles={{
                label: {
                  fontFamily: "lato,sans-serif",
                  color: "#253D4E",
                },
              }}
              // onChange={(e) => {
              //   setAddressInfo({
              //     ...addressInfo,
              //     state: e.target.value,
              //   });
              // }}
            />
            <TextInput
              label="Country"
              required
              h="64px"
              radius="10px"
              // value={ country}
              fw={400}
              styles={{
                label: {
                  fontFamily: "lato,sans-serif",
                  color: "#253D4E",
                },
              }}
              // onChange={(e) => {
              //   setAddressInfo({
              //     ...addressInfo,
              //     country: e.target.value,
              //   });
              // }}
            />
          </SimpleGrid>
          <Button radius="md" sx={{ alignItems: "center" }} onClick>
            Save address and Continue
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default Razorpay;
