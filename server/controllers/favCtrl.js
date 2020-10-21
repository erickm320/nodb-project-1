let favorites = {};




module.exports = {
    addHero: (req, res) => {
        const {hero} = req.body;
        favorites = hero;
        res.status(200).send(favorites)
    },

    getHero: (req, res) => {
        res.status(200).send(favorites)
    },
    forgetHero: (req, res) => {
        favorties = {};
        res.sendStatus(200)
    },
    editHero: (req, res) => {
        const {id} = req.params;
        const {name} = req.body;

        const hero = favorites.find(element => element.id === +id);
        hero.name = name;
        res.status(200).send(favorites);
    }

}