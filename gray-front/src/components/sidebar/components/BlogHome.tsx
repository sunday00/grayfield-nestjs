import { IoHome } from 'react-icons/io5'
import { Box, HStack } from '@chakra-ui/react'
import { spacing } from '../../../constants/size.tsx'

const BlogHome = () => {
  return (
    <Box p={spacing.md} borderWidth={1}>
      <a
        href={
          import.meta.env.VITE_ENV === `prod`
            ? 'https://grayfield.net'
            : 'http://localhost:5173'
        }
      >
        <HStack>
          <IoHome /> <span>MainBlog</span>
        </HStack>
      </a>
    </Box>
  )
}

export default BlogHome
