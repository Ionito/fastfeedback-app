import React from 'react'
import {
    Flex,
    Link,
    Stack,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
} from '@chakra-ui/react'
import { Logo } from '@/components/Icons'

const DashboardShell = ({ children }) => {
    return (
        <Flex justifyContent="flex-start" flexDirection="column" h="100vh">
            <Flex
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="whiteAlpha.500"
                p={4}
            >
                <Stack
                    spacing={4}
                    flexDirection="row"
                    isInline
                    alignItems="center"
                >
                    <Logo />
                    <Link>Feedback</Link>
                    <Link>Sites</Link>
                </Stack>
                <Stack spacing={2} isInline alignItems="center">
                    <Link>Account</Link>
                    <Avatar size="sm" />
                </Stack>
            </Flex>
            <Flex h="100%">
                <Flex
                    minWidth="100%"
                    backgroundColor="gray.100"
                    flexDirection="column"
                    p={4}
                >
                    <>
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Sites</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Heading>Sites</Heading>
                    </>
                    <Flex
                        minHeight="300px"
                        backgroundColor="whiteAlpha.500"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DashboardShell
