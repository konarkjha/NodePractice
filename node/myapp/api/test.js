pool.getConnection(function (err, conn) {
    if (err)
        return res.send(400);

  
    conn.query('SELECT * FROM table WHERE id=? AND name=?', [id, name], function(err, rows) {
        if(err) {
            conn.release();
            return res.send(400, 'Couldnt get a connection');
        }

        
        res.send(rows);

        conn.release();
    });
});
