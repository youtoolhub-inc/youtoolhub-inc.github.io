    const tagDictionary = {
    "pop": ["pop music", "pop artist", "pop song", "pop genre", "top 40", "chart topper", "dance pop", "pop culture", "mainstream pop", "pop hit"],
    "rock": ["rock music", "rock band", "rock song", "rock genre", "classic rock", "hard rock", "alternative rock", "indie rock", "punk rock", "rock festival"],
    "jazz": ["jazz music", "jazz band", "jazz song", "jazz genre", "smooth jazz", "bebop", "swing jazz", "jazz piano", "jazz saxophone", "jazz improvisation"],
    "hip hop": ["hip hop music", "rap music", "hip hop artist", "rap artist", "hip hop culture", "rap battle", "trap music", "boom bap", "freestyle rap", "hip hop beats"],
    "country": ["country music", "country artist", "country song", "country genre", "classic country", "modern country", "country guitar", "country festival", "country roots"],
    "reggae": ["reggae music", "reggae artist", "reggae song", "dub music", "ska", "roots reggae", "reggae dub", "reggae festival", "dancehall", "rastafarian music"],
    "electronic": ["electronic music", "electronic artist", "EDM", "techno", "house music", "trance", "dubstep", "electronic beats", "electronic festival", "drum and bass"],
    "classical": ["classical music", "classical composer", "orchestra", "symphony", "baroque music", "romantic period", "classical piano", "opera", "choral music", "classical concert"],
    "blues": ["blues music", "blues artist", "blues guitar", "blues song", "delta blues", "chicago blues", "electric blues", "country blues", "blues festival", "blues rock"],
    "latin": ["latin music", "latin artist", "reggaeton", "salsa", "bachata", "merengue", "cumbia", "latin jazz", "tropical music", "latin pop"],
    "metal": ["metal music", "heavy metal", "metal band", "thrash metal", "death metal", "black metal", "metal festival", "power metal", "doom metal", "metalcore"],
    "folk": ["folk music", "folk artist", "folk song", "folk festival", "traditional folk", "modern folk", "folk guitar", "folk storytelling", "acoustic folk", "americana"],
    "punk": ["punk music", "punk band", "punk rock", "hardcore punk", "pop punk", "punk subculture", "punk fashion", "DIY punk", "punk festival", "skate punk"],
    "R&B": ["R&B music", "soul music", "R&B artist", "neo-soul", "funk music", "rhythm and blues", "contemporary R&B", "R&B hits", "R&B festival", "slow jams"],
    "soul": ["soul music", "soul artist", "Motown", "southern soul", "neo-soul", "soul hits", "soul ballads", "soul festival", "classic soul", "soul legends"],
    "disco": ["disco music", "disco hits", "disco dance", "disco artist", "disco culture", "70s disco", "dancefloor", "disco revival", "disco festival", "disco classics"],
    "funk": ["funk music", "funk artist", "funk hits", "funk bass", "funk grooves", "funk guitar", "soul funk", "funk festival", "disco funk", "funk legends"],
    "techno": ["techno music", "techno artist", "minimal techno", "detroit techno", "techno beats", "techno festival", "dark techno", "industrial techno", "hard techno", "techno club"],
    "house": ["house music", "house artist", "deep house", "progressive house", "tech house", "house beats", "house festival", "funky house", "acid house", "vocal house"],
    "trance": ["trance music", "trance artist", "uplifting trance", "progressive trance", "psytrance", "goa trance", "trance festival", "trance beats", "vocal trance", "hard trance"],
    "dubstep": ["dubstep music", "dubstep artist", "brostep", "deep dubstep", "dubstep festival", "dubstep drops", "dubstep bass", "dubstep mixes", "trapstep", "dubstep wobbles"],
    "trap": ["trap music", "trap artist", "trap beats", "trap bass", "southern trap", "trap festival", "trap rap", "trap drops", "melodic trap", "trap culture"],
    "k-pop": ["K-pop music", "K-pop artist", "K-pop idols", "K-pop songs", "K-pop groups", "K-pop fandom", "K-pop dance", "K-pop hits", "K-pop culture", "K-pop fashion"],
    "afrobeat": ["afrobeat music", "afrobeat artist", "afrobeats", "afrobeat festival", "afrobeat dance", "afrobeat culture", "nigerian music", "african beats", "highlife", "afrobeat grooves"],
    "salsa": ["salsa music", "salsa dance", "salsa artist", "salsa festival", "latin salsa", "salsa hits", "salsa rhythms", "salsa instruments", "salsa bands", "salsa legends"],
    "reggaeton": ["reggaeton music", "reggaeton artist", "reggaeton hits", "reggaeton dance", "reggaeton beats", "latin reggaeton", "reggaeton festival", "urban reggaeton", "reggaeton party"],
    "grime": ["grime music", "grime artist", "grime beats", "UK grime", "grime culture", "grime MC", "grime festival", "grime bass", "grime rap", "grime lyrics"],
    "drum and bass": ["drum and bass", "D&B", "D&B artist", "jungle music", "liquid D&B", "neurofunk", "drum and bass festival", "D&B culture", "dark D&B", "D&B basslines"],
    "dub": ["dub music", "dub artist", "reggae dub", "dub festival", "dub soundsystem", "dub grooves", "dub culture", "roots dub", "dub bass", "dub mixes"],
    "samba": ["samba music", "samba dance", "samba festival", "samba artist", "brazilian samba", "samba rhythms", "samba percussion", "samba culture", "samba hits", "samba carnaval"],
    "bossa nova": ["bossa nova", "bossa nova artist", "brazilian jazz", "bossa nova hits", "bossa nova rhythms", "bossa nova guitar", "bossa nova festival", "latin jazz", "smooth bossa", "bossa nova legends"],
    "flamenco": ["flamenco music", "flamenco dance", "flamenco guitar", "flamenco artist", "spanish flamenco", "flamenco festival", "flamenco rhythms", "flamenco culture", "flamenco songs", "flamenco fusion"],
    "tango": ["tango music", "tango dance", "tango artist", "tango festival", "argentine tango", "tango rhythms", "tango culture", "tango legends", "classic tango", "modern tango"],
    "bolero": ["bolero music", "bolero artist", "latin bolero", "bolero festival", "bolero hits", "romantic bolero", "bolero guitar", "bolero rhythms", "bolero legends", "bolero songs"],
    "cumbia": ["cumbia music", "cumbia dance", "cumbia artist", "cumbia festival", "latin cumbia", "cumbia hits", "cumbia rhythms", "cumbia culture", "tropical cumbia", "modern cumbia"],
    "zydeco": ["zydeco music", "zydeco artist", "zydeco dance", "zydeco festival", "cajun music", "creole music", "zydeco accordion", "zydeco rhythms", "zydeco culture", "zydeco legends"],
    "bluegrass": ["bluegrass music", "bluegrass artist", "bluegrass band", "bluegrass festival", "traditional bluegrass", "modern bluegrass", "bluegrass guitar", "bluegrass banjo", "folk bluegrass", "bluegrass roots"],
    "gospel": ["gospel music", "gospel choir", "gospel artist", "christian music", "contemporary gospel", "southern gospel", "gospel festival", "gospel praise", "gospel hits", "gospel worship"]
    // Adicione mais gêneros conforme necessário
};

    function generateTags() {
        const genre = document.getElementById('musicGenre').value.toLowerCase();
        let tags = [];

        if (genre in tagDictionary) {
            tags = tagDictionary[genre];
        } else {
            // Gera tags genéricas caso o gênero não esteja no dicionário
            tags = [`${genre} music`, `${genre} artist`, `${genre} song`, `${genre} genre`, `best ${genre} songs`, `${genre} playlist`, `${genre} album`];
        }

        // Adiciona números e combinações para atingir até 500 tags
        let extraTags = [];
        for (let i = 1; i <= 500; i++) {
            extraTags.push(`${genre} tag ${i}`);
        }

        const allTags = [...tags, ...extraTags].slice(0, 500); // Gera até 500 tags
        document.getElementById('result').value = allTags.join(', ');
        document.getElementById('resultContainer').classList.remove('hidden');
    }

    function copyToClipboard() {
        const result = document.getElementById('result');
        result.select();
        document.execCommand('copy');
        alert('Tags copiadas para a área de transferência!');
    }
