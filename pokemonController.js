const pokemon = require("./state").pokemon;

const router = require("express").Router();
module.exports = router;

router.use("/:pokemonNameOrId", require("./middlewares").pokemonMiddleware);

router.get("/", getAllPokemon);
router.get("/:pokemonNameOrId", getPokemonByNameOrId);

router.delete("/:pokemonNameOrId", deletePokemonByNameOrId);

router.get("/:pokemonName/image", getPokemonImageByName);
router.get("/image", getPokemonImageWithQP);
router.get("/original-list", getPokemonOriginalList);
//router.post("/generation", putGeneration)

function getAllPokemon(req, res) {
  res.json(pokemon);
}

function getPokemonByNameOrId(req, res) {
  res.json(res.locals.pokemon);
}

function deletePokemonByNameOrId(req, res) {
  const index = pokemon.findIndex(function (el) {
    return el === res.locals.pokemon;
  });

  const deletedPokemon = pokemon.splice(index, 1)[0];

  res.json({ deleted: true, pokemon: deletedPokemon });
}

function getPokemonImageByName(req, res) {
  const { pokemonName } = req.params;
  console.log(pokemonName);

  res.sendFile(`${__dirname}/images/${pokemonName}.jpg`);
}

function getPokemonImageWithQP(req, res) {
  const { name: pokemonName } = req.query;

  res.sendFile(`${__dirname}/images/${pokemonName}.jpg`);
}

function getPokemonOriginalList(req, res) {
  res.sendFile(__dirname + "/pokemon.json");
}

/* function putGeneration(req, res) {
    const generation = "1"
    switch (generation) {
        case pokemon.id < 152:
            return "1"
            break
        case 152 > pokemon.id < 251:
            return "2"
            break
        default:
    }

    console.log("generation")
} */
