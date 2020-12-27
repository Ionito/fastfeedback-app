import Head from 'next/head'
import { Button, Heading, Flex } from '@chakra-ui/react'
import { Logo } from '@/components/Icons'

import { useAuth } from '../lib/auth'

export default function Home() {
    const auth = useAuth()

    return (
        <div>
            <Head>
                <title>Fast Feedback</title>
            </Head>

            <Flex
                as="main"
                direction="column"
                align="center"
                justify="center"
                w="100vw"
                h="100vh"
            >
                <Logo boxSize="40px" />
                <Heading fontFamily="body">Fast Feedback</Heading>

                {auth.user ? (
                    <Button
                        as="a"
                        href="/sites"
                        backgroundColor="gray.900"
                        color="white"
                        fontWeight="medium"
                        mt={4}
                        maxW="200px"
                        _hover={{ bg: 'gray.700' }}
                        _active={{
                            bg: 'gray.800',
                            transform: 'scale(0.95)',
                        }}
                    >
                        View Dashboard
                    </Button>
                ) : (
                    <Button onClick={() => auth.signinWithGithub()}>
                        login using github
                    </Button>
                )}
            </Flex>
        </div>
    )
}
