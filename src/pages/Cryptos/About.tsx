import CryptoPageLayout from 'components/Layout/CryptoPageLayout'
import { Text, Box, HStack } from '@chakra-ui/react'
import Script from 'next/script'

const About = () => {
  return (
    <CryptoPageLayout title="About Page">
      <Box>
        <Text as="h1" fontSize="36px"></Text>
        <Text as="p" fontSize="24px" mb="20px">
          This is a static page without any api calls.These icons are generated
          through font awesome cdn script only called on this page.
        </Text>
        <HStack justifyContent="center" spacing={10}>
          <i className="fab fa-bitcoin fa-10x"></i>
          <i className="fab fa-ethereum fa-10x"></i>
          <i className="fab fa-gg fa-10x"></i>
        </HStack>
        <Script
          src="https://kit.fontawesome.com/888acd4b49.js"
          crossOrigin="anonymous"
        ></Script>
      </Box>
    </CryptoPageLayout>
  )
}

export default About
