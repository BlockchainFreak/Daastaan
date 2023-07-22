import { TextInput,  SegmentedControl, Container, Autocomplete, Title, SimpleGrid, Textarea, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import countires from "./countries.json"

export default function FormPage() {

    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            country: "",
            address: "",
            city: "",
            phone: "",
            qualification: "",
            about: ""
        },
        validate: (values) => {
            const errors: Record<string, string> = {}

            if (!values.name) {
                errors.name = "Name is required"
            }

            if (!values.email) {
                errors.email = "Email is required"
            }

            if (!values.country) {
                errors.country = "Country is required"
            }

            if (!values.address) {
                errors.address = "Address is required"
            }

            if (!values.city) {
                errors.city = "City is required"
            }

            if (!values.phone) {
                errors.phone = "Phone is required"
            }

            // check if phone is a valid phone number
            if (values.phone && !/^\d{9,12}$/.test(values.phone)) {
                errors.phone = "Phone number is invalid"
            }

            return errors
        }
    })

    const handleClick = () => {

        const r = form.validate()

        if(r.hasErrors) {
            return
        }

        window.alert("Your Volunteer application has been Submitted")
        window.location.reload()
    }

    return (
        <Container my={20} className="p-12 flex flex-col gap-4 bg-zinc-800 rounded-3xl">
            <Title order={1}>Volunteer Form</Title>
            <SimpleGrid cols={2}>
                <TextInput
                    label="Name"
                    placeholder="Enter your name"
                    required
                    variant="filled"
                    className="mb-4"
                    {...form.getInputProps("name")}
                />
                <div className="flex items-center gap-6">
                    <h5>Title: </h5>
                    <SegmentedControl
                        data={["Mr.", "Mrs.", "Ms."]}
                    />
                </div>
                <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    required
                    variant="filled"
                    className="mb-4"
                    {...form.getInputProps("email")}
                />
                <Autocomplete
                    label="Country"
                    data={countires}
                    placeholder="Select your country"
                    required
                    variant="filled"
                    className="mb-4"
                    {...form.getInputProps("country")}
                />
                <TextInput
                    label="Address"
                    placeholder="Enter your address"
                    required
                    variant="filled"
                    className="mb-4"
                    {...form.getInputProps("address")}
                />
                <TextInput
                    label="City"
                    placeholder="Enter your city"
                    required
                    variant="filled"
                    className="mb-4"
                    {...form.getInputProps("city")}
                />
                <TextInput
                    label="Phone"
                    placeholder="Enter your phone number"
                    required
                    variant="filled"
                    className="mb-4"
                    {...form.getInputProps("phone")}
                />
                <TextInput
                    label="Qualification"
                    placeholder="Enter your qualification"
                    variant="filled"
                    className="mb-4"
                    {...form.getInputProps("qualification")}
                />
            </SimpleGrid>
            <Textarea
                label="About Yourself"
                placeholder="Enter about yourself"
                variant="filled"
                className="mb-4"
                minRows={6}
                {...form.getInputProps("about")}
            />
            <Button onClick={handleClick} variant="gradient" className="w-32">
                Submit
            </Button>
        </Container>
    )
}