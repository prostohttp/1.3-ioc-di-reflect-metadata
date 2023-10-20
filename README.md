# Домашнее задание к занятию «1.3. IoС и DI.  Библиотека reflect-metadata»

#### 1. Установите inversify к разрабатываемому приложению «библиотека» из модуля NDSE «Настройка окружения и Express.js» и создайте IoC-контейнер в файле `container.js`.

<details>
<summary>Какую версию проекта использовать.</summary>

Вы можете использовать любую версию проекта после [подключения mongodb](https://github.com/netology-code/ndse-homeworks/tree/master/011-mongo).
</details>

#### 2. Добавьте сервис `BooksRepository` из предыдущего задания в IoC-контейнер.

<details>
<summary>Как должно выглядеть добавление:</summary>


```ts
container.bind(BooksRepository).toSelf()
```
</details>

Сервис должен подключиться `.toSelf()` без использования дополнительного контракта.

#### 3. Воспользуйтесь IoC-контейнером в обработчиках запросов `express.js`, чтобы получить `BooksRepository`.
<details>
<summary>Как должно выглядеть использование:</summary>

```typescript

router.get(':id', async (req, res, next) => {
  const repo = container.get(BooksRepository);
  const book = await repo.getBook(req.params.id);
  res.json(book);
})
```

В примере для простоты опущены преобразования типов и обработка ошибок.
</details>
