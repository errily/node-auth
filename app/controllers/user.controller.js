exports.allAcess = ( req, res)=> {
    res.status(200).send({
      
        message : "Public Content"
    });
};

exports.userBoard =  (req, res) => {
    res.status(200).send({
      
        message : "User Content"
    });
};


exports.adminBoard =  (req, res) => {
    res.status(200).send({
      
        message : "Admin Content"
    });
};

exports.moderatorBoard =  (req, res) => {
    res.status(200).send({
      
        message : "Moderator Content"
    });
};