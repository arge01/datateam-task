export const IData = {
    first_name: "",
    last_name: "",
    phone_number: "",
    address: ""
}

export const AData = (type) => {
    switch (type) {
        case "first_name":
            return "First Name";
        case "last_name":
                return "Last Name";
        case "phone_number":
            return "Phone Number";
        case "address":
            return "Address";
        default:
            return "";
    }
}

const data = [
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    },
    {
        first_name: "Jhon",
        last_name: "Doe",
        phone_number: "+9999",
        address: "Ankara"
    }
];

export default data;