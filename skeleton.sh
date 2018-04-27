#!/sh/bash
componentName=$2

if [ $1 == b ]
    then
        componentType="Base"
elif [ $1 == c ]
    then
        componentType="Compound"
fi

mkdir src/Components/$componentType/$componentName
touch src/Components/$componentType/$componentName/index.js
mkdir src/Components/$componentType/$componentName/__tests__
touch src/Components/$componentType/$componentName/__tests__/$componentName"Spec.js"

