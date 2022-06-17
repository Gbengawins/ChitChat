import { Box, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Register from "../Components/Authentication/Register";

const Registerpage = () => {
  return (
    <Fragment>
      <div style={{ margin: "2rem auto 0 auto"}}>
        <Text textAlign="center" fontSize="4xl" fontFamily="Work sans">
          Register Form
        </Text>
        <Box
          d="flex"
          flexDirection="column"
          justifyContent="center"
          p={8}
          bg="white"
          w="100%"
          m="3rem auto 15px auto"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Register />
        </Box>
      </div>
    </Fragment>
  );
};

export default Registerpage;
