# Sistema de Recomendação de Filmes em Python usando KNN

Este notebook do Google Colab contém um script Python para um sistema de recomendação de filmes. O sistema utiliza o algoritmo K-Nearest Neighbors (KNN) para recomendar filmes com base em um título de filme fornecido.

Aqui está uma breve descrição da função principal, `get_movie_recommendation(movie_name)`, que recebe um nome de filme como entrada e retorna uma lista de filmes recomendados.

```python
def get_movie_recommendation(movie_name):
    n_movies_to_reccomend = 10
    movie_list = movies[movies['title'].str.contains(movie_name)]
    if len(movie_list):
        movie_idx = movie_list.iloc[0]['movieId']
        movie_idx = final_dataset[final_dataset['movieId'] == movie_idx].index[0]
        distances, indices = knn.kneighbors(csr_data[movie_idx], n_neighbors=n_movies_to_reccomend + 1)
        rec_movie_indices = sorted(list(zip(indices.squeeze().tolist(), distances.squeeze().tolist())), key=lambda x: x[1])[:-1]
        recommend_frame = []
        for val in rec_movie_indices:
            movie_idx = final_dataset.iloc[val[0]]['movieId']
            idx = movies[movies['movieId'] == movie_idx].index
            recommend_frame.append({'Título': movies.iloc[idx]['title'].values[0], 'Distância': val[1]})
        df = pd.DataFrame(recommend_frame, index=range(1, n_movies_to_reccomend + 1))
        return df
    else:
        return "Nenhum filme encontrado. Verifique sua entrada"

```      
A função get_movie_recommendation(movie_name) implementa um sistema de recomendação de filmes baseado em KNN, onde a similaridade entre filmes é calculada usando distâncias e uma lista de filmes recomendados é retornada com base no filme fornecido como entrada.

A função começa procurando o filme na base de dados usando a função str.contains para encontrar correspondências parciais ou imprecisas. Em seguida, ela obtém o índice desse filme na base de dados e utiliza o algoritmo K-Nearest Neighbors (KNN) para encontrar os filmes mais semelhantes com base nas distâncias entre eles.

Os filmes recomendados são classificados de acordo com suas distâncias para o filme de entrada e adicionados a um dataframe de recomendação. Por fim, a função retorna o dataframe contendo os títulos dos filmes recomendados e suas distâncias em relação ao filme de entrada. Se nenhum filme correspondente for encontrado na base de dados, a função retorna uma mensagem indicando que nenhum filme foi encontrado.


# Processamento dos dados

O pré-processamento de dados para um sistema de recomendação pode envolver várias etapas para garantir que os dados estejam em um formato adequado para análise e treinamento do modelo. Uma das etapas comuns é a pivotagem dos dados, que envolve a reorganização do conjunto de dados de forma a ter os usuários nas linhas e os filmes nas colunas.

No contexto descrito, o dataset de ratings (relacionado ao dataset de filmes) foi pivotado, colocando a coluna "movieId" sobre a coluna "userId". Essa transformação permite que cada célula da matriz represente a nota dada por um determinado usuário a um determinado filme. Após a pivotagem, é comum que existam células vazias (NaN) nos locais em que um usuário não avaliou um determinado filme. Para lidar com essas células vazias, elas são substituídas por 0, indicando a ausência de uma nota para esse par usuário-filme.

Após a substituição dos NaN por 0, é realizada uma limpeza de ruído no dataset. Essa limpeza pode envolver a remoção de outliers ou a correção de valores inconsistentes. O objetivo é garantir que os dados estejam coesos e representem corretamente as interações entre os usuários e os filmes.

# Transformação para o treinamento

Com o dataset pré-processado, ele é transformado em uma matriz, na qual as linhas correspondem aos usuários e as colunas correspondem aos filmes. Essa matriz é então usada para treinar o modelo KNN (K-Nearest Neighbors). O modelo utiliza a matriz de dados para encontrar os filmes mais semelhantes com base nas notas dadas pelos usuários, permitindo fazer recomendações com base nos filmes mais próximos.

# MQTT - Chamada para o modelo de recomendação com fila

Também inclui o uso do protocolo MQTT (Message Queuing Telemetry Transport) para permitir a comunicação assíncrona entre os componentes do sistema.

O sistema se inscreve em um tópico MQTT para ouvir os títulos de filmes que são enviados como mensagens. Quando um título de filme é recebido, a função get_movie_recommendation é chamada, utilizando esse título como entrada.

A função get_movie_recommendation usa o algoritmo KNN para encontrar os 10 filmes mais próximos ao título fornecido. Em seguida, os títulos desses filmes são publicados em outro tópico MQTT em forma de string, permitindo que outros componentes do sistema, como aplicativos ou dispositivos, recebam essas recomendações.

Essa integração com MQTT permite que o sistema de recomendação seja acionado de forma assíncrona, possibilitando que os usuários enviem solicitações de recomendação de filmes a qualquer momento, por meio do envio de mensagens para o tópico MQTT. As recomendações são então retornadas por meio de publicações em outro tópico MQTT, permitindo que os resultados sejam consumidos de maneira fácil e flexível.