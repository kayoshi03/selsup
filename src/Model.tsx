import React, { useState } from "react";

interface Param {
    id: number;
    title: string;
    value: string;
}

interface Model {
    id: number;
    title: string;
    params: Param[];
}

interface ParamInputProps {
    param: Param;
    onChange: (value: string) => void;
}

const ParamInput: React.FC<ParamInputProps> = ({ param, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div>
            <p>{param.title}</p>
            <input value={param.value} onChange={handleChange} />
        </div>
    );
};

interface ModelEditorProps {
    model: Model;
    onUpdateParam: (paramId: number, value: string) => void;
}

const ModelEditor: React.FC<ModelEditorProps> = ({ model, onUpdateParam }) => {
    const handleParamChange = (paramId: number, value: string) => {
        onUpdateParam(paramId, value);
    };

    return (
        <div>
            <h1>{model.title}</h1>
            {model.params.map((param) => (
                <ParamInput
                    key={param.id}
                    param={param}
                    onChange={(value) => handleParamChange(param.id, value)}
                />
            ))}
        </div>
    );
};
interface ModelProps {
    models: Model[];
}
const Model: React.FC<ModelProps> = ({models}) => {


    const [modelData, setModelData] = useState<Model[]>(models);

    const updateParam = (modelId: number, paramId: number, value: string) => {
        setModelData((prevModels) =>
            prevModels.map((model) =>
                model.id === modelId
                    ? {
                        ...model,
                        params: model.params.map((param) =>
                            param.id === paramId ? { ...param, value } : param
                        )
                    }
                    : model
            )
        );
    };

    const getModel = (modelId: number) => {
        const res = modelData.find((model) => model.id === modelId)
        console.log(res)
        return res;
    };

    return (
        <div>
            {modelData.map((model) => (
                <div key={model.id}>
                    <ModelEditor
                        model={model}
                        onUpdateParam={(paramId, value) =>
                            updateParam(model.id, paramId, value)
                        }
                    />
                    <button onClick={() => getModel(model.id)}>Get {model.title}</button>
                </div>
            ))}
        </div>
    );
};

export default Model;
