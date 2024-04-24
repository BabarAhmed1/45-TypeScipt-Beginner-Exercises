// Define the function make_album that returns an object representing a music album
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create album objects without the number of tracks
var album1 = make_album('Taylor Swift', 'Folklore');
var album2 = make_album('Billie Eilish', 'Happier Than Ever');
// Create an album object with the number of tracks
var album3 = make_album('Linkin Park', 'Meteora', 13);
// Print the album objects to show the stored information
console.log(album1); // Outputs: {artist: 'Taylor Swift', title: 'Folklore'}
console.log(album2); // Outputs: {artist: 'Billie Eilish', title: 'Happier Than Ever'}
console.log(album3); // Outputs: {artist: 'Linkin Park', title: 'Meteora', track: 13}
