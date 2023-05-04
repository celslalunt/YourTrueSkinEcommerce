import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AdminFormContent = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const createEvent = async () => {
        try {
            const data = {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                price: document.getElementById("price").value,
                stock: document.getElementById("stock").value,
                image: document.getElementById("image").value,
                Category_id: document.getElementById("category").value,
            };

            //untuk menghandle request bearer header
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };

            const url = "http://localhost:2000/product/add";
            const result = await axios.post(url, data, config);

            //untuk mereset kembali form

            document.getElementById("name").value = "";
            document.getElementById("description").value = "";
            document.getElementById("price").value = "";
            document.getElementById("stock").value = "";
            document.getElementById("image").value = "";
            document.getElementById("category").value = "";

            //memberikan alert
            alert(result.data.message);
        } catch (err) {
            alert(err.response.data);
        }
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w={500}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sell a Product
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <VStack>
                            <FormControl id="name" isRequired>
                                <FormLabel>Product Name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="description" isRequired>
                                <FormLabel>Description</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="price" isRequired>
                                <FormLabel>Price</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="stock" isRequired>
                            <FormLabel>Stock</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="image" isRequired>
                                <FormLabel>Image</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <Select id= "category" placeholder="Select Category ">
                                <option value="1">Face Wash</option>
                                <option value="2">Toner</option>
                                <option value="3">Serum</option>
                                <option value="4">Moisturizer</option>
                                <option value="5">Sun Screen</option>
                                <option value="6">Body Lotion</option>
                                <option value="7">Lip Care</option>
                                <option value="8">Face Mask</option>
                                <option value="9">Eye Care</option>
                                <option value="10">Makeup Remover</option>
                            </Select>
                        </VStack>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                onClick={createEvent}
                            >
                                Add Product
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                <Link
                                    color={"blue.400"}
                                    onClick={() => navigate("/")}
                                >
                                    Back to home
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};
