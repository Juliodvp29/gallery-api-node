import {Request, Response} from 'express';
import Album from '../models/Album';
import Image from '../models/Image';

function sortAlbums(_albums: any[]){
    let albums = _albums;
    for(let i = 0; i < albums.length; i++){
        albums[i].images = albums[i].images.length;
    }
    albums.sort((a, b) => {
        return b.images - a.images;
    }).reverse();
    return albums;
}


export async function orderAlbumsBySize(req: Request, res: Response): Promise<Response> {
    const albums = await Album.find();
    const sortedAlbums = sortAlbums(albums);
    return res.json(sortedAlbums);
} 

export async function saveImageInAlbum(req: Request, res: Response): Promise<Response> {
    const {albumId, imageId} = req.body;
    const album = await Album.findById(albumId);

    if (album == null) {
        return res.status(404).json({
            message: 'Album not found'
        });
    }

    album.list.push(imageId);
    await album.save();
    return res.json({
        message: 'Image saved in album successfully' 
    });

}

export async function createAlbum(req: Request, res: Response): Promise<Response> {
    const {name, id, list} = req.body;
    const album = new Album({name, id, list});
    await album.save();
    return res.json({
        message: 'Album created successfully'
    });
}

export async function getAlbums(req: Request, res: Response): Promise<Response> {
    const albums = await Album.find();
    return res.json(albums);
}


