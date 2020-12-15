/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Table } from 'antd'
import axios from '@utils/axios'
import { useSession } from 'next-auth/client'
import { useEffect, useState } from 'react'
import { useToast, Image, Button } from '@chakra-ui/react'

const Places = () => {
  const toast = useToast()
  const [session, loading] = useSession()
  const [dataSource, setDataSource] = useState([])
  const initData = async (id) => {
    try {
      const { data } = await axios({
        url: `/v1/place/host/${id}`,
        method: 'get',
      })
      // console.log(data.data)
      const dataTemp = []
      data.data.forEach((item, index) => {
        dataTemp.push({
          id: item.id,
          key: index,
          name: item.name,
          image: item.image,
          address: item.address,
          placeType: item.place_type,
        })
      })
      setDataSource([])
      setDataSource(dataTemp)
    } catch (error) {
      toast({
        title: 'Có sự cố xảy ra',
        description: 'Vui lòng kiểm tra lại đường truyền mạng',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  useEffect(() => {
    if (!loading) {
      const { id } = session.full_info
      debugger
      initData(id)
    }
  }, [loading])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => <Image src={image} w={50} />,
    },
    {
      title: 'Tên chỗ nghỉ',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Loại chỗ nghỉ',
      dataIndex: 'placeType',
      key: 'placeType',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Button colorScheme='orange' size='sm'>
          Xem
        </Button>
      ),
    },
  ]

  return <Table dataSource={dataSource} columns={columns} />
}

export default Places