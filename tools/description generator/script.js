    let credits = [];

    async function shortenLink() {
        const spotifyLink = document.getElementById('spotifyLink').value;
        if (!spotifyLink) {
            alert('Por favor, insira uma URL válida para o Spotify.');
            return;
        }

        const apiUrl = 'https://is.gd/create.php?format=json&url=' + encodeURIComponent(spotifyLink);

        try {
            const response = await fetch(apiUrl);
            const result = await response.json();

            if (result && result.shorturl) {
                document.getElementById('spotifyLink').value = result.shorturl;
                alert('Link encurtado com sucesso!');
            } else {
                alert('Não foi possível encurtar o link.');
            }
        } catch (error) {
            console.error('Erro ao encurtar link:', error);
            alert('Ocorreu um erro ao encurtar o link. Tente novamente mais tarde.');
        }
    }

    function addCredit() {
        const creditType = document.getElementById('creditType').value;
        const creditValue = document.getElementById('creditValue').value;

        if (creditValue.trim() !== "") {
            credits.push(`${creditType}: ${creditValue}`);
            updateCreditList();
            document.getElementById('creditValue').value = "";
        }
    }

    function updateCreditList() {
        const creditList = document.getElementById('creditList');
        creditList.innerHTML = credits.map(credit => `<p>${credit}</p>`).join('');
    }

    function generateDescription() {
        const songTitle = document.getElementById('songTitle').value;
        const artistName = document.getElementById('artistName').value;
        const albumName = document.getElementById('albumName').value;
        const releaseDate = document.getElementById('releaseDate').value;
        const spotifyLink = document.getElementById('spotifyLink').value;
        const lyrics = document.getElementById('lyrics').value;

        let description = `🎵 ${songTitle} - ${artistName}\n\n`;
        description += `Obrigado por assistir! Curta e compartilhe essa música, e não se esqueça de se inscrever no canal para mais conteúdos incríveis.\n\n`;

        if (albumName) {
            description += `Álbum: ${albumName}\n`;
        }

        description += `Lançamento: ${releaseDate}\n\n`;
        description += `Ouça em outras plataformas:\nSpotify: ${spotifyLink}\n\n`;

        if (lyrics) {
            description += `Letra da Música:\n${lyrics}\n\n`;
        }

        if (credits.length > 0) {
            description += `Créditos:\n${credits.join('\n')}\n\n`;
        }

        description += `Texto gerado por YouToolHub Inc`;

        document.getElementById('result').value = description;
        document.getElementById('resultContainer').classList.remove('hidden');
    }

    function copyToClipboard() {
        const result = document.getElementById('result');
        result.select();
        document.execCommand('copy');
        alert('Descrição copiada para a área de transferência!');
    }
