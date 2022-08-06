import {Request, Response} from 'express';
import Image from '../models/Image';
import Album from '../models/Album';
import path from 'path';
import fs from 'fs-extra';


export async function getImages(req: Request, res: Response): Promise<Response>{
    const images = await Image.find();
    return res.json(images);
}

export async function getImage(req: Request, res: Response): Promise<Response> {
    const image = await Image.findById(req.params.id);
    return res.json(image);
}

export async function createImage(req: Request, res: Response): Promise<Response> {
    const {name, albumId, path, author} = req.body;
    const image = new Image({name, albumId, path, author});
    await image.save();
    return res.json({
        message: 'Image created successfully'
    });
}

export async function deleteImage(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const image = await Image.findById(id);
    if(image == null) {
        return res.status(404).json({
            message: 'Image not found'
        });
    }
    await image.remove();
    return res.json({
        message: 'Image deleted successfully'
    });
}


export async function updateImage(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const {name, albumId, path, author} = req.body;
    const image = await Image.findById(id);
    if(image == null) {
        return res.status(404).json({
            message: 'Image not found'
        });
    }
    image.name = name;
    image.albumId = albumId;
    image.path = path;
    image.author = author;
    await image.save();
    return res.json({
        message: 'Image updated successfully'
    });
}
