import pika, json, os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "admin.settings")
django.setup()

from book_manage.models import Book

params = pika.URLParameters('amqps://mxodroxr:MZoGlc3-Gg27A4mmL55hwHZbuLjnYXC8@toad.rmq.cloudamqp.com/mxodroxr')

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='admin')


def callback(ch, method, properties, body):
    print('Received in admin')
    book_id = int(json.loads(body))
    print(book_id)
    
    if properties.content_type == 'book_borrowed':
        book = Book.objects.get(id=book_id)
        book.amount = book.amount - 1
        book.save()
        print("Book is borrowed")

    # product = Book.objects.get(id=id)
    # product.likes = product.likes + 1
    # product.save()
    # print('Product likes increased!')


channel.basic_consume(queue='admin', on_message_callback=callback, auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()
