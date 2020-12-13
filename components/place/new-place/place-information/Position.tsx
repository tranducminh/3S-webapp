/* eslint-disable @typescript-eslint/ban-types */
import { Box, Select, FormControl, FormLabel, Input, Text, Flex, Spacer } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import InfoBox from '../InfoBox'

const Position = ({ showNextTab }: { showNextTab: Function }) => {
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    if (city === '' || address === '') {
      showNextTab(false)
    } else showNextTab(true)
  }, [city, address, showNextTab])

  return (
    <Flex>
      <Box border='1px' borderColor='gray.200' borderRadius='md' p={5} w='60%'>
        <Box borderBottomColor='gray.200' borderBottomWidth={1} mb={5} pb={3}>
          <Text fontSize='xl' fontWeight='bold'>
            Vị trí chỗ nghỉ
          </Text>
        </Box>
        <FormControl id='city' isRequired mb={5}>
          <FormLabel>Thành phố:</FormLabel>
          <Select placeholder='Thành phố' onChange={(event) => setCity(event.target.value)}>
            <option>Hà Nội</option>
            <option>TP. Hồ Chí Minh</option>
            <option>Vũng Tàu</option>
            <option>Đà Lạt</option>
            <option>Nha Trang</option>
            <option>Quảng Ninh</option>
            <option>Hội An</option>
            <option>Đà Nắng</option>
          </Select>
        </FormControl>
        <FormControl id='address-detail' isRequired mb={5}>
          <FormLabel>Địa chỉ chi tiết</FormLabel>
          <Input placeholder='Địa chỉ chi tiết' onChange={(event) => setAddress(event.target.value)} />
        </FormControl>
      </Box>
      <Spacer />
      <Box w='35%'>
        <InfoBox
          title='Ghi địa chỉ như thế nào là đúng?'
          content='Địa chỉ 3S của bạn sẽ được cung cấp cho Khách hàng khi họ hoàn tất đặt chỗ. Đối với địa chỉ nhà cụ thể (ngõ/ ngách), bạn ghi theo thứ tự lần lượt là: Ngõ/kiệt/ngách/hẻm.
        Ví dụ: Số nhà 250 ngách 78 ngõ 162 Kim Mã, Ba Đình, Hà Nội sẽ được điền là: 162/78/250 Kim Mã, Ba Đình, Hà Nội hoặc SN 250 ngõ 162/78 Ba Đình, Hà Nội.'
        />
        <InfoBox
          title='Lưu ý:'
          content='Hãy kiểm tra kỹ thông tin trước khi đi tới bước tiếp theo bởi sau khi chỗ nghỉ được duyệt và đăng tải trên hệ thống Luxstay, bạn sẽ không thể tự ý chỉnh sửa địa chỉ. Tất cả sự thay đổi vị trí sau đó đều cần có sự hỗ trợ và kiểm duyệt của 3S.'
        />
      </Box>
    </Flex>
  )
}

export default Position