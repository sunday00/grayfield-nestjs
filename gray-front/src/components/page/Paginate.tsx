import {
  Button,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  StackDivider,
} from '@chakra-ui/react'
import {
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
  FaRegPaperPlane,
} from 'react-icons/fa6'
import { useState } from 'react'

const Paginate = ({
  current,
  max,
  movePage,
}: {
  current: number
  max: number
  movePage: (page: number) => void
}) => {
  const [pageValue, setPageValue] = useState(current)

  const handleMovePage = () => {
    movePage(pageValue)
  }

  const handleMoveFirst = () => {
    setPageValue(1)
    movePage(1)
  }

  const handleMovePrev = () => {
    const to = current > 1 ? current - 1 : 1
    setPageValue(to)
    movePage(to)
  }

  const handleMoveNext = () => {
    const to = current > max ? current + 1 : max
    setPageValue(to)
    movePage(to)
  }

  const handleMoveEnd = () => {
    setPageValue(max)
    movePage(max)
  }

  return (
    <HStack
      divider={<StackDivider borderColor="gray.200" />}
      align="stretch"
      justifyContent="center"
    >
      <HStack>
        <Button onClick={handleMoveFirst}>
          <FaAnglesLeft />
        </Button>
        <Button onClick={handleMovePrev}>
          <FaAngleLeft />
        </Button>
      </HStack>

      <HStack>
        <NumberInput
          min={1}
          max={max}
          maxW="180"
          value={pageValue}
          allowMouseWheel
          onChange={(e) => setPageValue(Number(e ?? 1))}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Button onClick={handleMovePage}>
          <FaRegPaperPlane />
        </Button>
      </HStack>

      <HStack>
        <Button onClick={handleMoveNext}>
          <FaAngleRight />
        </Button>
        <Button onClick={handleMoveEnd}>
          <FaAnglesRight />
        </Button>
      </HStack>
    </HStack>
  )
}

export default Paginate
