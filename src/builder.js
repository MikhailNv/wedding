import sha256 from "js-sha256";


const Builder = ( data ) => {
    let changed_builder_data = [];
    let counter = 0;
    const hashed_data = sha256(data).slice(0, data.length);
    const reversed_hashed_data = hashed_data.split("").reverse().join("");
    for (let i = 0; i < hashed_data.length; i++) {
        if (counter % 3 === 0) { counter = 0 };
        changed_builder_data.push(reversed_hashed_data[i] + (3 - counter));
        counter++;
    };
    return ( changed_builder_data.join("") )
}

export default Builder;