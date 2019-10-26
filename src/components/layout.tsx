/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import { Router, RouteComponentProps } from "@reach/router"
import Header from "./header"
import { Box, Text, Flex, CSSReset } from "@chakra-ui/core"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

interface ILayout {
  location?: Location
  title?: string
  children?: any
}

const Layout: React.FC<ILayout> = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { isLoggedIn, user } = useIdentityContext()
  const development = process.env.NODE_ENV === "development"
  return (
    <Flex minH="100vh" flexDir="column" bg="gray.900">
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box maxW="sm" mx="auto">
        <Box as="main">{props.children}</Box>
      </Box>
      <Flex bg="gray.700" px="4" mt="auto" as="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Flex>
      {!development && <IdentityModal showDialog={!isLoggedIn} />}
    </Flex>
  )
}

export default Layout
