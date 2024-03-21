import Model from "./Model.tsx";

const initialModels = [
    {
        id: 1,
        title: "Product 1",
        params: [
            { id: 1, title: "Length", value: "500" },
            { id: 2, title: "Color", value: "Red" }
        ]
    },
    {
        id: 2,
        title: "Product 2",
        params: [
            { id: 1, title: "Weight", value: "2kg" },
            { id: 2, title: "Material", value: "Plastic" }
        ]
    }
];
const App = () => {
    return (
        <>
            <Model models={initialModels}/>
        </>
    )
}
export  default App;