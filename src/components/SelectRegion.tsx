import { useEffect, useState } from "react"

interface SelectRegionProps {
    regionChange: any
    regionSelected: any
    disabled: any
}

export function SelectRegion({ regionChange, regionSelected, disabled }:SelectRegionProps) {

    const [ regions, setRegions ] = useState([])

    useEffect(() => {
        fetch("https://pokejs-api.herokuapp.com/regions/", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setRegions(data)
            })
            .catch((err) => console.log(err))
    })

    return (
        <div className="flex justify-between items-center mt-3 px-1">
            <div className="flex flex-col" id="">
                <p className="text-center my-3 font-pokejs text-xl">Regiões</p>
                <button onClick={regionChange} disabled={disabled} className={`text-center mt-3 disabled:opacity-50 ${"Todas" === regionSelected && "text-yellow-500 underline underline-offset-1"}`} value="Todas">Todas</button>
                {regions.map((region: any) => (
                    <button onClick={regionChange} disabled={disabled} className={`text-center mt-3 disabled:opacity-50 ${region.name === regionSelected && "text-yellow-500 underline underline-offset-1"}`} value={region.name} key={region.id}>{region.name[0].toUpperCase() + region.name.substring(1)}</button>
                ))}
            </div>
        </div>
    )
}