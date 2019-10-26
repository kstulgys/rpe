import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Text } from "@chakra-ui/core"

const Header = ({ siteTitle }) => (
  <Box as="header" bg="gray.700" px="4" py="4" boxShadow="lg">
    <Text fontSize="lg" fontWeight="semibold">
      {siteTitle}
    </Text>
  </Box>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
