import { Button, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
<Stack color={'white'} justifyContent={['space-evenly']} alignItems={'center'} bgColor={'black'} direction={['column','row']} p={4}>
<Heading color={'orange'}>Ankit Kumar Pandey</Heading>
<VStack alignItems={'center'}>
<Text fontWeight={'bold'}>Socials</Text>
<HStack>
    <FaLinkedin/>
<Text>Linkedin</Text>
</HStack>

<HStack>
    <FaFacebook/>
<Text>Facebook</Text>
</HStack>
<HStack>
    <FaWhatsapp/>
<Text>Whatsapp</Text>
</HStack>

</VStack>
<VStack alignItems={'center'}>
<Text fontWeight={'bold'}>Inquiries</Text>
<Text>For any Inuiries, question or Commendation, Please mail Us <a href="mailto:Ankit170400gmail.com" style={{textDecoration:'underline'}}>Click here</a></Text>
</VStack>
<Button colorScheme='orange'>Reach Me</Button>
</Stack>
  )
}

export default Footer;