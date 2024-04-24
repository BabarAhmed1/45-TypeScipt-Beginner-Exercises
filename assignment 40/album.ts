// Define the function make_album that returns an object representing a music album
function make_album(artist: string, title: string, tracks?: number): object {
    let album: { artist: string; title: string; tracks?: number } = {artist, 
        title };
        
        if (tracks !== undefined) {
            album.tracks = tracks;
        }

        return album;
}

// Create album objects without the number of tracks
let album1 = make_album('Taylor Swift', 'Folklore');
let album2 = make_album('Billie Eilish', 'Happier Than Ever');

// Create an album object with the number of tracks
let album3 = make_album('Linkin Park', 'Meteora', 13);

// Print the album objects to show the stored information
console.log(album1); // Outputs: {artist: 'Taylor Swift', title: 'Folklore'}
console.log(album2); // Outputs: {artist: 'Billie Eilish', title: 'Happier Than Ever'}
console.log(album3); // Outputs: {artist: 'Linkin Park', title: 'Meteora', track: 13}