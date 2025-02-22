public class ThreadOp extends Thread {
    public void run() {
        // task for Thread
        System.out.println("This is user defined Thread...");
    }

    public static void main(String[] args) {
        System.out.println("Program Started...");
        Thread t = Thread.currentThread();

        // getName
        String tname = t.getName();
        System.out.println("Current running Thread is : " + tname);

        // setName
        t.setName("prashantThread");
        System.out.println("Current running Thread is : " + t.getName());

        // sleep
        try {
            Thread.sleep(1000);
        } catch (Exception e) {
        }
        // getId
        System.out.println("Thread ID: " + t.getId());

        // start()
        UserThread t2 = new UserThread();
        t2.start();

        System.out.println("Program ended...");
    }
}

class UserThread extends Thread {
    public void run() {
        // task for user thread
        System.out.println("user Thread Running...");
    }
}