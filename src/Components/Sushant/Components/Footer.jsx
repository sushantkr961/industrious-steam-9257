import { Box, Flex, Img, Link, Text } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
    let style = {
        fontSize: '14px',
        color: '#000000',
        fontWeight: 'bold',
        cursor: 'pointer',
    }

  return (
    <Box bg='#faf1ed' p='30px'>
        <Flex  w='65%' margin='auto' justify='space-between'>
            <Flex textAlign='left'>
                <Box p='20px 50px 20px 20px' textAlign='left' >
                    <Text fontSize='16px' color='#333333'>About Tripadvisor</Text>
                    <Link style={style}>About Us</Link>  <br />
                    <Link style={style}>Press</Link> <br />
                    <Link style={style}>Resources and Policies</Link> <br />
                    <Link style={style}>Careers</Link> <br />
                    <Link style={style}>Trust & Safety</Link> <br />
                    <Link style={style}>Contact us</Link> <br />
                    <Link style={style}>Accessibility Statement</Link> <br />
                </Box>
                <Box p='20px 50px 20px 20px' >
                    <Text fontSize='16px' color='#333333'>Explore</Text>
                    <Link style={style}>Write a review</Link> <br />
                    <Link style={style}>Add a Place</Link> <br />
                    <Link style={style}>Join</Link> <br />
                    <Link style={style}>Travellers' Choice</Link> <br />
                    <Link style={style}>GreenLeaders</Link> <br />
                    <Link style={style}>Help Centre</Link> <br />
                    <Link style={style}>Travel Articles</Link> <br />
                </Box>
                <Box p='20px 50px 20px 20px' >
                    <Text fontSize='16px' color='#333333'>Do Business With Us</Text>
                    <Link style={style}>Owners & DMO/CVB</Link> <br />
                    <Link style={style}>Business Advantage</Link> <br />
                    <Link style={style}>Sponsored Placements</Link> <br />
                    <Link style={style}>Access our Content Api</Link> <br />
                    <Text fontSize='16px' color='#333333'>Get the App</Text>
                    <Link style={style}>iPhone App</Link> <br />
                    <Link style={style}>Android App</Link> <br />
                </Box>
            </Flex>
            <Box p='20px 70px 20px 20px' textAlign='left' >
                <Text fontSize='16px' color='#333333'>Tripadvisor Sites</Text>
                <Text fontSize='16px' color='#333333'>Book tours and attraction tickets on <Link style={style}> Viator</Link></Text>
            </Box>
        </Flex>
        <Box w='65%' margin='auto'>
            <Img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg' />
            <Box>
                <Text>© 2022 Tripadvisor LLC All rights reserved.</Text>
                <Text>This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more</Text>
            </Box>
            <Box>
                <Img src='' alt='facebook' />
                <Img src='' alt='twitter' />
                <Img src='' alt='Instagram' />
            </Box>
        </Box>
    </Box>
  )
}

export default Footer