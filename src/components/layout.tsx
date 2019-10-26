/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Box, Text, Flex } from "@chakra-ui/core"

// import "./layout.css"
interface Props {
  location?: Location
  title?: string
  children?: any
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Flex minH="100vh" flexDir="column">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box maxW="sm" mx="auto">
        <Box as="main">{children}</Box>
      </Box>
      <Flex bg="gray.700" px="4" mt="auto" as="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Flex>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
