const asyncHandler = (requestHandler) => {

    return (req, res, next) => {

        Promise
            .resolve(requestHandler(req, res, next))
            .catch((err) =>next(err));

    };

};

export{asyncHandler};


// can also write using try catch