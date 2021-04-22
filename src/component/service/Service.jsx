import React from 'react'
import axios from 'axios'

export function login(LoginDto) {
    return axios.post("http://localhost:8888/home/login", LoginDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function newRegistration(SuperAdmin) {
    console.log(SuperAdmin,'aa')
    return axios.post("http://localhost:8888/home/register", SuperAdmin, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });

}

export function createProduct(Product) {
    console.log(Product,'aa')

    return axios.post("http://localhost:8888/home/product/create"
        , Product, {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
             "token": sessionStorage.getItem('token')
        }
    });
}
export function getProduct() {
    return axios.get("http://localhost:8888/home/product/findAll"
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                "token": sessionStorage.getItem('token')
            }
        });
}
