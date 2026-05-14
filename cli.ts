// CLI: Command Line Interface

const params = process.argv
const command = params[2]

if (command === 'add') {
    const value = params[3]
    console.log(`lógica para adicionar novo item: ${value}`)
    process.exit(0)
}

console.log(`não entrou em nenhum if`)
