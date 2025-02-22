public class Company {
    int n;
    boolean f = false;

    // f=false -> chance = producer will produce
    // f=true -> chance = consumer will consume
    synchronized public void produceItem(int n) {
        try {
            if (f)
                wait();
        } catch (Exception e) {
        }
        this.n = n;
        System.out.println("produced: " + this.n);
        f = true;
        notify();
    }

    synchronized public int consumeItem() {
        try {
            if (!f)
                wait();
        } catch (Exception e) {
        }
        System.out.println("Consumed: " + this.n);
        f = false;
        notify();
        return this.n;
    }
}
