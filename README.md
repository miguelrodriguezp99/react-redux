# Configurar ROME -> Notion

# Instalar tailwind
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Añadir esto en el fichero tailwind.config.js en el content
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@tremor/**/*.{js,jsx,ts,tsx}",


# Instalar redux-toolkit
pnpm add @reduxjs/toolkit
pnpm install react-redux (en caso de que usemos react)

# Explicaciones
1. Creamos un store donde almacenaremos el estado de la aplicación (store.js)
2. Envolvemos la app con el provider del store (index.js)
3. Creamos un slice para cada parte del estado que queramos almacenar (counterSlice.js)
	3.1 Un Slice necesita nombre, estado inicial y reducers
	3.2 Los reducers son funciones que modifican el estado
4. Una vez creamos el Slice (de usuarios por ejemplo) lo añadimos al store (store.js)
5. Para usar el estado en un componente usamos el hook useSelector (Ejemplo en ListOfUsers.js)