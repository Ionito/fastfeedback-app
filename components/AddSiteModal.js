import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    FormErrorMessage,
    VStack,
    Input,
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import { createSite } from '@/lib/db'
import { useToast } from '@chakra-ui/react'

const AddSiteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()

    const validateName = (value) => {
        let error
        if (!value) {
            error = 'Name is required'
        }
        return error
    }

    const validateUrl = (value) => {
        let error
        if (!value) {
            error = 'Url is required'
        }
        return error
    }

    const onSubmit = (values, actions) => {
        createSite(values)
            .then(() => {
                actions.setSubmitting(false)
                toast({
                    title: 'Site created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,
                })
                onClose()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <Button onClick={onOpen} variant="solid" size="md">
                Add new site
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik
                            initialValues={{ name: '', url: '' }}
                            onSubmit={onSubmit}
                        >
                            {(props) => (
                                <Form>
                                    <VStack spacing={2}>
                                        <Field
                                            name="name"
                                            validate={validateName}
                                        >
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.name &&
                                                        form.touched.name
                                                    }
                                                >
                                                    <FormLabel htmlFor="name">
                                                        Site name
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        id="name"
                                                        placeholder="name"
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.name}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Field
                                            name="url"
                                            validate={validateUrl}
                                        >
                                            {({ field, form }) => (
                                                <FormControl
                                                    isInvalid={
                                                        form.errors.url &&
                                                        form.touched.url
                                                    }
                                                >
                                                    <FormLabel htmlFor="url">
                                                        Site url
                                                    </FormLabel>
                                                    <Input
                                                        {...field}
                                                        id="url"
                                                        placeholder="site url"
                                                    />
                                                    <FormErrorMessage>
                                                        {form.errors.url}
                                                    </FormErrorMessage>
                                                </FormControl>
                                            )}
                                        </Field>
                                        <Button
                                            my="20px"
                                            colorScheme="teal"
                                            isLoading={props.isSubmitting}
                                            type="submit"
                                        >
                                            Add Site
                                        </Button>
                                    </VStack>
                                </Form>
                            )}
                        </Formik>
                    </ModalBody>

                    {/*  <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Add
                        </Button>
                        <Button colorScheme="red" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddSiteModal
