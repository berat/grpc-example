const Posts = require("../models/Posts");
const Users = require("../models/User");

const tarihDuzenle = (tarih) => {
  let aylar = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  let gün = tarih.getDate();
  let aySayi = tarih.getMonth();
  let yil = tarih.getFullYear();

  return gün + " " + aylar[aySayi] + " " + yil;
};

function share({ request: { post, who } }, callback) {
  const item = await Users.findOne({ _id: who })
  const data = await item.toJSON();
  var deger = data.nickName;
  const newPost = new Posts({
    post: post,
    who: deger,
    date: tarihDuzenle(new Date())

  });
  try {
    const data = await newPost.save();
    callback(null, { status: true, post: data })
  }
  catch(ex){
    callback(null, { status: false })
  }
}

function remove({ request: { id } }, callback) {
  Posts.remove({_id: id}, function(err,doc) {
    if (err) callback(null, { status: false })
    else callback(null, { status: true })
  })
}


function allPost(call, callback) {
  Posts.find(function(err, doc){
    if (err) {
      callback(null, { status: false })
    } else {
      callback(null, { status: false, post: doc})
    }
  })
}




module.exports = {
  share,
  remove,
  allPost
};
