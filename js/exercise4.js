var friends = 'Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet';
var arrFriends = friends.split(",")

arrFriends = arrFriends.sort().reverse()
friends = arrFriends.join(",")

console.log(friends)