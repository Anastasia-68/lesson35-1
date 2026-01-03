import './styles.scss';
import catImage from './assets/images/webpack.jpg';

const root = document.body;

root.innerHTML = `
    <div class="card">
        <h1>Webpack в действии</h1>
        <p class="subtitle">Конфигурация и управление активами</p>
        <ul class="features-list">
            <li>✅ Хеширование имен файлов</li>
            <li>✅ Поддержка локальных шрифтов (Roboto)</li>
            <li>✅ Обработка изображений</li>
            <li>✅ Интеграция стилей CSS</li>
            <li>✅ Оптимизация сборки</li>
        </ul>
        <div id="image-container"></div>
        <p class="footer">Собрано с любовью и Webpack © 2026</p>
    </div>
`;

const container = document.getElementById('image-container');
if (container) {
    const img = document.createElement('img');
    img.src = catImage;
    img.alt = 'Webpack Cat';
    container.appendChild(img);
}