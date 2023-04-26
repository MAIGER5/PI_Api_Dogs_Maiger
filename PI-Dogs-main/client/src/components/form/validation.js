export const Validation = (data, errosstate, setErrors) => {
    const errors = {...errosstate};

    !data.name? errors.name = 'Please input a breed name' : errors.name = '';
    
    !data.temperament? errors.temperament = 'Please input a temperament' : errors.temperament = '';
    
    !data.life_span? errors.life_span = 'Please input a temperament' : errors.life_span = '';

    !data.weightMin? errors.weightMin = 'Please input a weight number': !/\d{1,2}/gi.test(data.weightMin)? errors.weightMin = 'Please input a min values. example: "10"': errors.weightMin = '';

    !data.weightMax? errors.weightMax = 'Please input a weight number': !/\d{1,2}/gi.test(data.weightMax)? errors.weightMax = 'Please input a min values. example: "10"': errors.weightMax = '';

    !data.heightMin? errors.heightMin = 'Please input a weight number': !/\d{1,2}/gi.test(data.heightMin)? errors.heightMin = 'Please input a min values. example: "10"': errors.heightMin = '';

    !data.heightMax? errors.heightMax = 'Please input a weight number': !/\d{1,2}/gi.test(data.heightMax)? errors.heightMax = 'Please input a max values. example: "10"': errors.heightMax = '';

    !data.reference_image_id? errors.reference_image_id = 'Please input a reference_image_id' : errors.reference_image_id = '';

    setErrors(errors);

}