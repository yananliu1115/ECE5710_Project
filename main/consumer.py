import pika, json

from main import Book, db

params = pika.URLParameters('amqps://mxodroxr:MZoGlc3-Gg27A4mmL55hwHZbuLjnYXC8@toad.rmq.cloudamqp.com/mxodroxr')

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='main')


def callback(ch, method, properties, body):
    print('Received in main')
    data = json.loads(body)
    print(data)

    if properties.content_type == 'book_created':
        book = Book(id=data['id'], title=data['title'], image=data['image'], amount=data['amount'])
        db.session.add(book)
        db.session.commit()
        print('Book Created')
    elif properties.content_type == 'book_updated':
        book = Book.query.filter_by(id=data['id']).first()
        book.title = data['title']
        book.image = data['image']
        book.amount = data['amount']
        db.session.commit()
        print('Book Updated')

    elif properties.content_type == 'book_deleted':
        book = Book.query.filter_by(id=data).first()
        db.session.delete(book)
        db.session.commit()
        print('Book Deleted')


channel.basic_consume(queue='main', on_message_callback=callback, auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()
