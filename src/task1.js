const writeStringToOutput = (string) => {
    process.stdout.write(string)
}

const handleData = (data) => {
    const reversedString = data.toString().split('').reverse().join('');
    writeStringToOutput(reversedString);
}

process.openStdin().addListener('data', handleData)