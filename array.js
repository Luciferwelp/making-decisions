let num_array = [1,4,11,2,37,-4];
let largest = num_array[0];
let smallest = num_array[0];

for (let i = 0; i<num_array.length; i++ ) {
   
    let num_im_looking_at = num_array[i];
    
    if ( num_im_looking_at > largest) {
        largest = num_im_looking_at;
    } else if (num_im_looking_at < smallest){
        smallest = num_im_looking_at;
    }   
}
console.log(largest);
console.log(smallest);
