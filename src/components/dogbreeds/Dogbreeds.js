import React from 'react'
import axios from 'axios'

export class Dogbreeds extends React.Component {

    constructor() {
        super();
        this.state = {
            message_breeds: {},
            dogbreeds_data: [],
            dogsubbreeds_data: [],
            table_data: [
                'element 2'
            ],
            selected_breed: null,
            selected_sub_breed: null,
            images_array: [],
            isLoading: false,
            error: null,
            error_search: "",
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = response.data;
                const message = breeds.message;
                //let counter = 0;
                let breedsArray = [];
                let capitalizedFirstLetter = "";

                //console.log("componentDidMount - status : " + breeds.status);
                
                const keyNames = Object.keys(message);
                keyNames.forEach((key) => {
                    //counter++;
                    //console.log("keyNames.forEach - breed " + counter + " : " + key);
                    capitalizedFirstLetter = key.charAt(0).toUpperCase() + key.slice(1);
                    breedsArray.push(capitalizedFirstLetter);
                });

                //console.log("componentDidMount - counter : " + counter);
                this.setState({ message_breeds: message, dogbreeds_data: breedsArray, isLoading: false });
            })  
            .catch((errorGet) => {
                //console.log("componentDidMount error : " + errorGet.message);
                this.setState({ error: errorGet, isLoading: false });
            });
    }
    
    handleOnChange(key, event) {
        //console.log("handleOnChange - key: " + key);
        //console.log("handleOnChange - value: " + event.target.value);

        this.setState({ isLoading: true });

        if (key === "breed" && event.target.value !== "-1") {
            this.setState({ selected_breed: null, selected_sub_breed: null });

            const selectValue = event.target.value;
            const breed = selectValue.charAt(0).toLowerCase() + selectValue.slice(1);
            const message_breeds = this.state.message_breeds;
            const subBreedsLength = message_breeds[breed].length;

            //console.log("breed selected : " + breed);
            //console.log("subBreedsLength: " + subBreedsLength);

            if (subBreedsLength === 0) {
                const noSubBreedsMessage = "No sub breeds available";
                let emptyArray = [];
                emptyArray.push(noSubBreedsMessage);

                this.setState({ dogsubbreeds_data: emptyArray, isLoading: false, selected_breed: breed, images_array: [] });
            } 
            else {
                const subBreedsMessage = "Select Sub Breed";
                let subBreedArray = [];
                subBreedArray.push(subBreedsMessage);

                message_breeds[breed].forEach((element) => {
                    subBreedArray.push(element.charAt(0).toUpperCase() + element.slice(1));
                });
                this.setState({ isLoading: false, dogsubbreeds_data: subBreedArray, selected_breed: breed, images_array: [] });
            }
        }

        if (key === "breed" && event.target.value === "-1") {
            const subBreedsMessage = "Select Sub Breed";
            let subBreedArray = [];
            subBreedArray.push(subBreedsMessage);

            this.setState({ isLoading: false, dogsubbreeds_data: subBreedArray, selected_breed: null });    
        }

        if (key === "subBreed" && event.target.value === "-1") {
            this.setState({ isLoading: false, selected_sub_breed: null });
        }

        if (key === "subBreed" && event.target.value !== "-1") {
            this.setState({ selected_sub_breed: null });

            const selectValue = event.target.value;
            const subBreed = selectValue.charAt(0).toLowerCase() + selectValue.slice(1);
            this.setState({ isLoading: false, selected_sub_breed: subBreed, images_array: [] });
        }
        
    }


    search = () => {
        const { selected_breed, selected_sub_breed } = this.state;
        let apiUrl = null;

        //console.log("Search - selected_breed: " + selected_breed);
        //console.log("Search - selected_sub_breed: " + selected_sub_breed);

        if (selected_breed !== null && selected_sub_breed !== null) {
            apiUrl = "https://dog.ceo/api/breed/" + selected_breed + "/" + selected_sub_breed + "/images";           
        }
        else if (selected_breed !== null && selected_sub_breed === null) {
            apiUrl = "https://dog.ceo/api/breed/" + selected_breed + "/images";
        }

        //console.log("Search - apiUrl: " + apiUrl);

        if (selected_breed === null && selected_sub_breed === null) {
            const error_message = "Must indicate a breed. Sub Breed is optional.";
            this.setState({ error_search: error_message });
        }
        else {
            axios.get(apiUrl)
                .then(response => {
                    const imagesResponse = response.data;
                    const imagesArray = imagesResponse.message;
                    //console.log("Search - imagesArray length: " + imagesArray.length);

                    if (imagesArray.length > 10) {
                        let partialArray = [];
                        let count = 0;

                        for (let i = 0; i < imagesArray.length; i++) {
                            count++;
                            partialArray.push(imagesArray[i]);
                            if (count === 10) break;
                        }
                        this.setState({ images_array: partialArray });
                    }
                    else {
                        this.setState({ images_array: imagesArray });
                    }
                })  
                .catch((errorGet) => {
                    const error_message = errorGet.message;
                    //console.log("search error : " + error_message);
                    this.setState({ error_search: error_message });
                });             
        }
        
    }

    clean = () => {
        document.getElementById("searchForm").reset();
        this.setState({ selected_breed: null, images_array: [] }); 
    }

    render() {
        const { dogbreeds_data, isLoading, error, dogsubbreeds_data, images_array, error_search } = this.state;
        let errorMesagge;

        if (error == null) {
            errorMesagge = "";
        }
        else {
            errorMesagge = "* Error: An error ocurred while retrieving breeds.";
        }

        if (isLoading) {
            return (
                <section className="page-section-dogs" id="dogbreeds">
                <div className="container">
                    <div className="col-lg-8 mx-auto">
                        <form name="searchForm" id="searchForm" noValidate="novalidate">
                        <br/>
                        <div className="btn-search">
                            <div className="form-group">
                            <img className="img-loading-size-class" id="image-loading" src="assets/img/loading3.gif" alt="Loading" />
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
                </section>
            )
        }  
        else {
            const images_list = images_array.length ? (
                images_array.map(image => {
                    return (
                        <div className="portfolio-item mx-auto" key={ image }>
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white">
                                <i className="fas fa-plus fa-3x"></i>
                            </div>
                            </div>
                            <img className="img-fluid" src={ image } alt="" />
                        </div>
                    )
                })
            ):
            (
                <div className="portfolio-item mx-auto">
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-center text-white">
                        <i className="fas fa-plus fa-3x"></i>
                    </div>
                    </div>
                    No images available
                </div>                
            )

            const dogBreedsList = dogbreeds_data.length ? (
                dogbreeds_data.map(breed => {
                    return (
                        <option key={ breed } value={ breed }>{ breed }</option>
                    )
                })
            ):
            (
                <option value="-2" defaultValue>No breeds available</option>
            )

            const dogBreedsSubList = dogsubbreeds_data.length ? (
                dogsubbreeds_data.map(subBreed => {
                    return (
                        <option key={ subBreed } value={ subBreed }>{ subBreed }</option>
                    )
                })
            ):
            (
                <option value="-2" defaultValue>No sub breeds available</option>
            )
            
            return (
                <section className="page-section-dogs portfolio" id="dogbreeds">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Dog Breeds</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="col-lg-8 mx-auto">
                        <form name="searchForm" id="searchForm" noValidate="novalidate">
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <p className="help-block text-danger">{ errorMesagge }</p>
                            <p className="help-block text-danger">{ error_search }</p>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <select name="breed" id="breed" className="form-control" onChange={e => this.handleOnChange('breed',e)} >
                                <option value="-1">Select Breed</option>
                                { dogBreedsList }
                            </select>
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls mb-0 pb-2">
                            <select name="subBreed" id="subBreed" className="form-control" onChange={e => this.handleOnChange('subBreed',e)} >
                                { dogBreedsSubList }
                            </select>
                            </div>
                        </div>
                        <br/>
                        <div className="btn-search">
                            <div className="form-group">
                            <button type="button" className="btn btn-primary btn-xl" onClick={() => this.search()} >
                                Search
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-primary btn-xl" onClick={() => this.clean()} >
                                Clean
                            </button>
                            </div>
                        </div>
                        <br/>
                        </form>
                    </div>

                    <div className="row">
                        { images_list }           
                    </div>

                </div>
                </section>
            )
        }
    }
}

export default Dogbreeds
