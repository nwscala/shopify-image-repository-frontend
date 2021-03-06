import React, { Component } from 'react'
import Images from '../components/Images'
import ImageForm from '../components/ImageForm'
import Container from 'react-bootstrap/esm/Container'

export default class ImageContainer extends Component {
    state = {
        imageList: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/images')
            .then(resp => resp.json())
            .then(data => this.setState({
                imageList: data
            }))
    }

    addImage = (image) => {
        this.setState(previousState => {
            return {
                imageList: [
                    ...previousState.imageList,
                    image
                ]
            }
        })
    }

    removeImage = (id) => {
        this.setState(previousState => {
            return {
                imageList: previousState.imageList.filter((image) => image.id !== id)
            }
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <h1>Welcome to the Imaginarium!</h1>
                    <ImageForm addImage={this.addImage} />
                    <Images imageList={this.state.imageList} removeImage={this.removeImage} />
                </Container>
            </div>
        )
    }
}
