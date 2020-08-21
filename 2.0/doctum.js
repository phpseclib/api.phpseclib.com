

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '<ul><li data-name="namespace:phpseclib" class="opened"><div style="padding-left:0px" class="hd"><span class="icon icon-play"></span><a href="phpseclib.html">phpseclib</a></div><div class="bd"><ul><li data-name="namespace:phpseclib_Crypt" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/Crypt.html">Crypt</a></div><div class="bd"><ul><li data-name="class:phpseclib_Crypt_AES" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/AES.html">AES</a></div></li><li data-name="class:phpseclib_Crypt_Base" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/Base.html">Base</a></div></li><li data-name="class:phpseclib_Crypt_Blowfish" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/Blowfish.html">Blowfish</a></div></li><li data-name="class:phpseclib_Crypt_DES" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/DES.html">DES</a></div></li><li data-name="class:phpseclib_Crypt_Hash" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/Hash.html">Hash</a></div></li><li data-name="class:phpseclib_Crypt_RC2" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/RC2.html">RC2</a></div></li><li data-name="class:phpseclib_Crypt_RC4" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/RC4.html">RC4</a></div></li><li data-name="class:phpseclib_Crypt_RSA" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/RSA.html">RSA</a></div></li><li data-name="class:phpseclib_Crypt_Random" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/Random.html">Random</a></div></li><li data-name="class:phpseclib_Crypt_Rijndael" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/Rijndael.html">Rijndael</a></div></li><li data-name="class:phpseclib_Crypt_TripleDES" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/TripleDES.html">TripleDES</a></div></li><li data-name="class:phpseclib_Crypt_Twofish" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Crypt/Twofish.html">Twofish</a></div></li></ul></div></li><li data-name="namespace:phpseclib_File" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/File.html">File</a></div><div class="bd"><ul><li data-name="namespace:phpseclib_File_ASN1" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/File/ASN1.html">ASN1</a></div><div class="bd"><ul><li data-name="class:phpseclib_File_ASN1_Element" ><div style="padding-left:62px" class="hd leaf"><a href="phpseclib/File/ASN1/Element.html">Element</a></div></li></ul></div></li><li data-name="class:phpseclib_File_ANSI" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/File/ANSI.html">ANSI</a></div></li><li data-name="class:phpseclib_File_ASN1" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/File/ASN1.html">ASN1</a></div></li><li data-name="class:phpseclib_File_X509" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/File/X509.html">X509</a></div></li></ul></div></li><li data-name="namespace:phpseclib_Math" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/Math.html">Math</a></div><div class="bd"><ul><li data-name="class:phpseclib_Math_BigInteger" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Math/BigInteger.html">BigInteger</a></div></li></ul></div></li><li data-name="namespace:phpseclib_Net" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/Net.html">Net</a></div><div class="bd"><ul><li data-name="namespace:phpseclib_Net_SFTP" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/Net/SFTP.html">SFTP</a></div><div class="bd"><ul><li data-name="class:phpseclib_Net_SFTP_Stream" ><div style="padding-left:62px" class="hd leaf"><a href="phpseclib/Net/SFTP/Stream.html">Stream</a></div></li></ul></div></li><li data-name="class:phpseclib_Net_SCP" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Net/SCP.html">SCP</a></div></li><li data-name="class:phpseclib_Net_SFTP" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Net/SFTP.html">SFTP</a></div></li><li data-name="class:phpseclib_Net_SSH1" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Net/SSH1.html">SSH1</a></div></li><li data-name="class:phpseclib_Net_SSH2" ><div style="padding-left:44px" class="hd leaf"><a href="phpseclib/Net/SSH2.html">SSH2</a></div></li></ul></div></li><li data-name="namespace:phpseclib_System" class="opened"><div style="padding-left:18px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/System.html">System</a></div><div class="bd"><ul><li data-name="namespace:phpseclib_System_SSH" ><div style="padding-left:36px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/System/SSH.html">SSH</a></div><div class="bd"><ul><li data-name="namespace:phpseclib_System_SSH_Agent" ><div style="padding-left:54px" class="hd"><span class="icon icon-play"></span><a href="phpseclib/System/SSH/Agent.html">Agent</a></div><div class="bd"><ul><li data-name="class:phpseclib_System_SSH_Agent_Identity" ><div style="padding-left:80px" class="hd leaf"><a href="phpseclib/System/SSH/Agent/Identity.html">Identity</a></div></li></ul></div></li><li data-name="class:phpseclib_System_SSH_Agent" ><div style="padding-left:62px" class="hd leaf"><a href="phpseclib/System/SSH/Agent.html">Agent</a></div></li></ul></div></li></ul></div></li></ul></div></li></ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                        {"type":"Namespace","link":"phpseclib.html","name":"phpseclib","doc":"Namespace phpseclib"},{"type":"Namespace","link":"phpseclib/Crypt.html","name":"phpseclib\\Crypt","doc":"Namespace phpseclib\\Crypt"},{"type":"Namespace","link":"phpseclib/File.html","name":"phpseclib\\File","doc":"Namespace phpseclib\\File"},{"type":"Namespace","link":"phpseclib/File/ASN1.html","name":"phpseclib\\File\\ASN1","doc":"Namespace phpseclib\\File\\ASN1"},{"type":"Namespace","link":"phpseclib/Math.html","name":"phpseclib\\Math","doc":"Namespace phpseclib\\Math"},{"type":"Namespace","link":"phpseclib/Net.html","name":"phpseclib\\Net","doc":"Namespace phpseclib\\Net"},{"type":"Namespace","link":"phpseclib/Net/SFTP.html","name":"phpseclib\\Net\\SFTP","doc":"Namespace phpseclib\\Net\\SFTP"},{"type":"Namespace","link":"phpseclib/System.html","name":"phpseclib\\System","doc":"Namespace phpseclib\\System"},{"type":"Namespace","link":"phpseclib/System/SSH.html","name":"phpseclib\\System\\SSH","doc":"Namespace phpseclib\\System\\SSH"},{"type":"Namespace","link":"phpseclib/System/SSH/Agent.html","name":"phpseclib\\System\\SSH\\Agent","doc":"Namespace phpseclib\\System\\SSH\\Agent"},                                                        {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/AES.html","name":"phpseclib\\Crypt\\AES","doc":"Pure-PHP implementation of AES."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\AES","fromLink":"phpseclib/Crypt/AES.html","link":"phpseclib/Crypt/AES.html#method_setBlockLength","name":"phpseclib\\Crypt\\AES::setBlockLength","doc":"Dummy function"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\AES","fromLink":"phpseclib/Crypt/AES.html","link":"phpseclib/Crypt/AES.html#method_setKeyLength","name":"phpseclib\\Crypt\\AES::setKeyLength","doc":"Sets the key length"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\AES","fromLink":"phpseclib/Crypt/AES.html","link":"phpseclib/Crypt/AES.html#method_setKey","name":"phpseclib\\Crypt\\AES::setKey","doc":"Sets the key."},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/Base.html","name":"phpseclib\\Crypt\\Base","doc":"Base Class for all \\phpseclib\\Crypt&#42; cipher classes"},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method___construct","name":"phpseclib\\Crypt\\Base::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_setIV","name":"phpseclib\\Crypt\\Base::setIV","doc":"Sets the initialization vector. (optional)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_setKeyLength","name":"phpseclib\\Crypt\\Base::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_getKeyLength","name":"phpseclib\\Crypt\\Base::getKeyLength","doc":"Returns the current key length in bits"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_getBlockLength","name":"phpseclib\\Crypt\\Base::getBlockLength","doc":"Returns the current block length in bits"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_setKey","name":"phpseclib\\Crypt\\Base::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_setPassword","name":"phpseclib\\Crypt\\Base::setPassword","doc":"Sets the password."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_encrypt","name":"phpseclib\\Crypt\\Base::encrypt","doc":"Encrypts a message."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_decrypt","name":"phpseclib\\Crypt\\Base::decrypt","doc":"Decrypts a message."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__openssl_ctr_process","name":"phpseclib\\Crypt\\Base::_openssl_ctr_process","doc":"OpenSSL CTR Processor"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__openssl_ofb_process","name":"phpseclib\\Crypt\\Base::_openssl_ofb_process","doc":"OpenSSL OFB Processor"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__openssl_translate_mode","name":"phpseclib\\Crypt\\Base::_openssl_translate_mode","doc":"phpseclib <-> OpenSSL Mode Mapper"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_enablePadding","name":"phpseclib\\Crypt\\Base::enablePadding","doc":"Pad \"packets\"."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_disablePadding","name":"phpseclib\\Crypt\\Base::disablePadding","doc":"Do not pad packets."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_enableContinuousBuffer","name":"phpseclib\\Crypt\\Base::enableContinuousBuffer","doc":"Treat consecutive \"packets\" as if they are a continuous buffer."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_disableContinuousBuffer","name":"phpseclib\\Crypt\\Base::disableContinuousBuffer","doc":"Treat consecutive packets as if they are a discontinuous buffer."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_isValidEngine","name":"phpseclib\\Crypt\\Base::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_setPreferredEngine","name":"phpseclib\\Crypt\\Base::setPreferredEngine","doc":"Sets the preferred crypt engine"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_getEngine","name":"phpseclib\\Crypt\\Base::getEngine","doc":"Returns the engine currently being utilized"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__setEngine","name":"phpseclib\\Crypt\\Base::_setEngine","doc":"Sets the engine as appropriate"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__encryptBlock","name":"phpseclib\\Crypt\\Base::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__decryptBlock","name":"phpseclib\\Crypt\\Base::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__setupKey","name":"phpseclib\\Crypt\\Base::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__setup","name":"phpseclib\\Crypt\\Base::_setup","doc":"Setup the self::ENGINE_INTERNAL $engine"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__setupMcrypt","name":"phpseclib\\Crypt\\Base::_setupMcrypt","doc":"Setup the self::ENGINE_MCRYPT $engine"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__pad","name":"phpseclib\\Crypt\\Base::_pad","doc":"Pads a string"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__unpad","name":"phpseclib\\Crypt\\Base::_unpad","doc":"Unpads a string."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__clearBuffers","name":"phpseclib\\Crypt\\Base::_clearBuffers","doc":"Clears internal buffers"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__string_shift","name":"phpseclib\\Crypt\\Base::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__string_pop","name":"phpseclib\\Crypt\\Base::_string_pop","doc":"String Pop"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__increment_str","name":"phpseclib\\Crypt\\Base::_increment_str","doc":"Increment the current string"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__setupInlineCrypt","name":"phpseclib\\Crypt\\Base::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__createInlineCryptFunction","name":"phpseclib\\Crypt\\Base::_createInlineCryptFunction","doc":"Creates the performance-optimized function for en/decrypt()"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__getLambdaFunctions","name":"phpseclib\\Crypt\\Base::_getLambdaFunctions","doc":"Holds the lambda_functions table (classwide)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method__hashInlineCryptFunction","name":"phpseclib\\Crypt\\Base::_hashInlineCryptFunction","doc":"Generates a digest from $bytes"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_safe_intval","name":"phpseclib\\Crypt\\Base::safe_intval","doc":"Convert float to int"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Base","fromLink":"phpseclib/Crypt/Base.html","link":"phpseclib/Crypt/Base.html#method_safe_intval_inline","name":"phpseclib\\Crypt\\Base::safe_intval_inline","doc":"eval()'able string for in-line float to int"},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/Blowfish.html","name":"phpseclib\\Crypt\\Blowfish","doc":"Pure-PHP implementation of Blowfish."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\Blowfish","fromLink":"phpseclib/Crypt/Blowfish.html","link":"phpseclib/Crypt/Blowfish.html#method_setKeyLength","name":"phpseclib\\Crypt\\Blowfish::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Blowfish","fromLink":"phpseclib/Crypt/Blowfish.html","link":"phpseclib/Crypt/Blowfish.html#method_isValidEngine","name":"phpseclib\\Crypt\\Blowfish::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Blowfish","fromLink":"phpseclib/Crypt/Blowfish.html","link":"phpseclib/Crypt/Blowfish.html#method__setupKey","name":"phpseclib\\Crypt\\Blowfish::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Blowfish","fromLink":"phpseclib/Crypt/Blowfish.html","link":"phpseclib/Crypt/Blowfish.html#method__encryptBlock","name":"phpseclib\\Crypt\\Blowfish::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Blowfish","fromLink":"phpseclib/Crypt/Blowfish.html","link":"phpseclib/Crypt/Blowfish.html#method__decryptBlock","name":"phpseclib\\Crypt\\Blowfish::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Blowfish","fromLink":"phpseclib/Crypt/Blowfish.html","link":"phpseclib/Crypt/Blowfish.html#method__setupInlineCrypt","name":"phpseclib\\Crypt\\Blowfish::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/DES.html","name":"phpseclib\\Crypt\\DES","doc":"Pure-PHP implementation of DES."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\DES","fromLink":"phpseclib/Crypt/DES.html","link":"phpseclib/Crypt/DES.html#method_isValidEngine","name":"phpseclib\\Crypt\\DES::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\DES","fromLink":"phpseclib/Crypt/DES.html","link":"phpseclib/Crypt/DES.html#method_setKey","name":"phpseclib\\Crypt\\DES::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\DES","fromLink":"phpseclib/Crypt/DES.html","link":"phpseclib/Crypt/DES.html#method__encryptBlock","name":"phpseclib\\Crypt\\DES::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\DES","fromLink":"phpseclib/Crypt/DES.html","link":"phpseclib/Crypt/DES.html#method__decryptBlock","name":"phpseclib\\Crypt\\DES::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\DES","fromLink":"phpseclib/Crypt/DES.html","link":"phpseclib/Crypt/DES.html#method__processBlock","name":"phpseclib\\Crypt\\DES::_processBlock","doc":"Encrypts or decrypts a 64-bit block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\DES","fromLink":"phpseclib/Crypt/DES.html","link":"phpseclib/Crypt/DES.html#method__setupKey","name":"phpseclib\\Crypt\\DES::_setupKey","doc":"Creates the key schedule"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\DES","fromLink":"phpseclib/Crypt/DES.html","link":"phpseclib/Crypt/DES.html#method__setupInlineCrypt","name":"phpseclib\\Crypt\\DES::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/Hash.html","name":"phpseclib\\Crypt\\Hash","doc":"Pure-PHP implementations of keyed-hash message authentication codes (HMACs) and various cryptographic hashing functions."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method___construct","name":"phpseclib\\Crypt\\Hash::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method_setKey","name":"phpseclib\\Crypt\\Hash::setKey","doc":"Sets the key for HMACs"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__computeKey","name":"phpseclib\\Crypt\\Hash::_computeKey","doc":"Pre-compute the key used by the HMAC"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method_getHash","name":"phpseclib\\Crypt\\Hash::getHash","doc":"Gets the hash function."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method_setHash","name":"phpseclib\\Crypt\\Hash::setHash","doc":"Sets the hash function."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method_hash","name":"phpseclib\\Crypt\\Hash::hash","doc":"Compute the HMAC."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method_getLength","name":"phpseclib\\Crypt\\Hash::getLength","doc":"Returns the hash length (in bytes)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__md5","name":"phpseclib\\Crypt\\Hash::_md5","doc":"Wrapper for MD5"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__sha1","name":"phpseclib\\Crypt\\Hash::_sha1","doc":"Wrapper for SHA1"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__md2","name":"phpseclib\\Crypt\\Hash::_md2","doc":"Pure-PHP implementation of MD2"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__sha256","name":"phpseclib\\Crypt\\Hash::_sha256","doc":"Pure-PHP implementation of SHA256"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__sha512","name":"phpseclib\\Crypt\\Hash::_sha512","doc":"Pure-PHP implementation of SHA384 and SHA512"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__rightRotate","name":"phpseclib\\Crypt\\Hash::_rightRotate","doc":"Right Rotate"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__rightShift","name":"phpseclib\\Crypt\\Hash::_rightShift","doc":"Right Shift"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__not","name":"phpseclib\\Crypt\\Hash::_not","doc":"Not"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__add","name":"phpseclib\\Crypt\\Hash::_add","doc":"Add"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Hash","fromLink":"phpseclib/Crypt/Hash.html","link":"phpseclib/Crypt/Hash.html#method__string_shift","name":"phpseclib\\Crypt\\Hash::_string_shift","doc":"String Shift"},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/RC2.html","name":"phpseclib\\Crypt\\RC2","doc":"Pure-PHP implementation of RC2."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method_isValidEngine","name":"phpseclib\\Crypt\\RC2::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method_setKeyLength","name":"phpseclib\\Crypt\\RC2::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method_getKeyLength","name":"phpseclib\\Crypt\\RC2::getKeyLength","doc":"Returns the current key length"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method_setKey","name":"phpseclib\\Crypt\\RC2::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method_encrypt","name":"phpseclib\\Crypt\\RC2::encrypt","doc":"Encrypts a message."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method_decrypt","name":"phpseclib\\Crypt\\RC2::decrypt","doc":"Decrypts a message."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method__encryptBlock","name":"phpseclib\\Crypt\\RC2::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method__decryptBlock","name":"phpseclib\\Crypt\\RC2::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method__setupMcrypt","name":"phpseclib\\Crypt\\RC2::_setupMcrypt","doc":"Setup the \\phpseclib\\Crypt\\Base::ENGINE_MCRYPT $engine"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method__setupKey","name":"phpseclib\\Crypt\\RC2::_setupKey","doc":"Creates the key schedule"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC2","fromLink":"phpseclib/Crypt/RC2.html","link":"phpseclib/Crypt/RC2.html#method__setupInlineCrypt","name":"phpseclib\\Crypt\\RC2::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/RC4.html","name":"phpseclib\\Crypt\\RC4","doc":"Pure-PHP implementation of RC4."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method___construct","name":"phpseclib\\Crypt\\RC4::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method_isValidEngine","name":"phpseclib\\Crypt\\RC4::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method_setIV","name":"phpseclib\\Crypt\\RC4::setIV","doc":"Dummy function."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method_setKeyLength","name":"phpseclib\\Crypt\\RC4::setKeyLength","doc":"Sets the key length"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method_encrypt","name":"phpseclib\\Crypt\\RC4::encrypt","doc":"Encrypts a message."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method_decrypt","name":"phpseclib\\Crypt\\RC4::decrypt","doc":"Decrypts a message."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method__encryptBlock","name":"phpseclib\\Crypt\\RC4::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method__decryptBlock","name":"phpseclib\\Crypt\\RC4::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method__setupKey","name":"phpseclib\\Crypt\\RC4::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RC4","fromLink":"phpseclib/Crypt/RC4.html","link":"phpseclib/Crypt/RC4.html#method__crypt","name":"phpseclib\\Crypt\\RC4::_crypt","doc":"Encrypts or decrypts a message."},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/RSA.html","name":"phpseclib\\Crypt\\RSA","doc":"Pure-PHP PKCS#1 compliant implementation of RSA."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method___construct","name":"phpseclib\\Crypt\\RSA::__construct","doc":"The constructor"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_createKey","name":"phpseclib\\Crypt\\RSA::createKey","doc":"Create public / private key pair"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__convertPrivateKey","name":"phpseclib\\Crypt\\RSA::_convertPrivateKey","doc":"Convert a private key to the appropriate format."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__convertPublicKey","name":"phpseclib\\Crypt\\RSA::_convertPublicKey","doc":"Convert a public key to the appropriate format"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__parseKey","name":"phpseclib\\Crypt\\RSA::_parseKey","doc":"Break a public or private key down into its constituant components"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_getSize","name":"phpseclib\\Crypt\\RSA::getSize","doc":"Returns the key size"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__start_element_handler","name":"phpseclib\\Crypt\\RSA::_start_element_handler","doc":"Start Element Handler"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__stop_element_handler","name":"phpseclib\\Crypt\\RSA::_stop_element_handler","doc":"Stop Element Handler"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__data_handler","name":"phpseclib\\Crypt\\RSA::_data_handler","doc":"Data Handler"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_loadKey","name":"phpseclib\\Crypt\\RSA::loadKey","doc":"Loads a public or private key"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setPassword","name":"phpseclib\\Crypt\\RSA::setPassword","doc":"Sets the password"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setPublicKey","name":"phpseclib\\Crypt\\RSA::setPublicKey","doc":"Defines the public key"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setPrivateKey","name":"phpseclib\\Crypt\\RSA::setPrivateKey","doc":"Defines the private key"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_getPublicKey","name":"phpseclib\\Crypt\\RSA::getPublicKey","doc":"Returns the public key"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_getPublicKeyFingerprint","name":"phpseclib\\Crypt\\RSA::getPublicKeyFingerprint","doc":"Returns the public key's fingerprint"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_getPrivateKey","name":"phpseclib\\Crypt\\RSA::getPrivateKey","doc":"Returns the private key"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__getPrivatePublicKey","name":"phpseclib\\Crypt\\RSA::_getPrivatePublicKey","doc":"Returns a minimalistic private key"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method___toString","name":"phpseclib\\Crypt\\RSA::__toString","doc":"__toString() magic method"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method___clone","name":"phpseclib\\Crypt\\RSA::__clone","doc":"__clone() magic method"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__generateMinMax","name":"phpseclib\\Crypt\\RSA::_generateMinMax","doc":"Generates the smallest and largest numbers requiring $bits bits"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__decodeLength","name":"phpseclib\\Crypt\\RSA::_decodeLength","doc":"DER-decode the length"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__encodeLength","name":"phpseclib\\Crypt\\RSA::_encodeLength","doc":"DER-encode the length"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__string_shift","name":"phpseclib\\Crypt\\RSA::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setPrivateKeyFormat","name":"phpseclib\\Crypt\\RSA::setPrivateKeyFormat","doc":"Determines the private key format"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setPublicKeyFormat","name":"phpseclib\\Crypt\\RSA::setPublicKeyFormat","doc":"Determines the public key format"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setHash","name":"phpseclib\\Crypt\\RSA::setHash","doc":"Determines which hashing function should be used"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setMGFHash","name":"phpseclib\\Crypt\\RSA::setMGFHash","doc":"Determines which hashing function should be used for the mask generation function"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setSaltLength","name":"phpseclib\\Crypt\\RSA::setSaltLength","doc":"Determines the salt length"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__i2osp","name":"phpseclib\\Crypt\\RSA::_i2osp","doc":"Integer-to-Octet-String primitive"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__os2ip","name":"phpseclib\\Crypt\\RSA::_os2ip","doc":"Octet-String-to-Integer primitive"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__exponentiate","name":"phpseclib\\Crypt\\RSA::_exponentiate","doc":"Exponentiate with or without Chinese Remainder Theorem"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__blind","name":"phpseclib\\Crypt\\RSA::_blind","doc":"Performs RSA Blinding"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__equals","name":"phpseclib\\Crypt\\RSA::_equals","doc":"Performs blinded RSA equality testing"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsaep","name":"phpseclib\\Crypt\\RSA::_rsaep","doc":"RSAEP"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsadp","name":"phpseclib\\Crypt\\RSA::_rsadp","doc":"RSADP"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsasp1","name":"phpseclib\\Crypt\\RSA::_rsasp1","doc":"RSASP1"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsavp1","name":"phpseclib\\Crypt\\RSA::_rsavp1","doc":"RSAVP1"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__mgf1","name":"phpseclib\\Crypt\\RSA::_mgf1","doc":"MGF1"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsaes_oaep_encrypt","name":"phpseclib\\Crypt\\RSA::_rsaes_oaep_encrypt","doc":"RSAES-OAEP-ENCRYPT"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsaes_oaep_decrypt","name":"phpseclib\\Crypt\\RSA::_rsaes_oaep_decrypt","doc":"RSAES-OAEP-DECRYPT"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__raw_encrypt","name":"phpseclib\\Crypt\\RSA::_raw_encrypt","doc":"Raw Encryption / Decryption"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsaes_pkcs1_v1_5_encrypt","name":"phpseclib\\Crypt\\RSA::_rsaes_pkcs1_v1_5_encrypt","doc":"RSAES-PKCS1-V1_5-ENCRYPT"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsaes_pkcs1_v1_5_decrypt","name":"phpseclib\\Crypt\\RSA::_rsaes_pkcs1_v1_5_decrypt","doc":"RSAES-PKCS1-V1_5-DECRYPT"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__emsa_pss_encode","name":"phpseclib\\Crypt\\RSA::_emsa_pss_encode","doc":"EMSA-PSS-ENCODE"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__emsa_pss_verify","name":"phpseclib\\Crypt\\RSA::_emsa_pss_verify","doc":"EMSA-PSS-VERIFY"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsassa_pss_sign","name":"phpseclib\\Crypt\\RSA::_rsassa_pss_sign","doc":"RSASSA-PSS-SIGN"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsassa_pss_verify","name":"phpseclib\\Crypt\\RSA::_rsassa_pss_verify","doc":"RSASSA-PSS-VERIFY"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__emsa_pkcs1_v1_5_encode","name":"phpseclib\\Crypt\\RSA::_emsa_pkcs1_v1_5_encode","doc":"EMSA-PKCS1-V1_5-ENCODE"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsassa_pkcs1_v1_5_sign","name":"phpseclib\\Crypt\\RSA::_rsassa_pkcs1_v1_5_sign","doc":"RSASSA-PKCS1-V1_5-SIGN"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__rsassa_pkcs1_v1_5_verify","name":"phpseclib\\Crypt\\RSA::_rsassa_pkcs1_v1_5_verify","doc":"RSASSA-PKCS1-V1_5-VERIFY"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setEncryptionMode","name":"phpseclib\\Crypt\\RSA::setEncryptionMode","doc":"Set Encryption Mode"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setSignatureMode","name":"phpseclib\\Crypt\\RSA::setSignatureMode","doc":"Set Signature Mode"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_setComment","name":"phpseclib\\Crypt\\RSA::setComment","doc":"Set public key comment."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_getComment","name":"phpseclib\\Crypt\\RSA::getComment","doc":"Get public key comment."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_encrypt","name":"phpseclib\\Crypt\\RSA::encrypt","doc":"Encryption"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_decrypt","name":"phpseclib\\Crypt\\RSA::decrypt","doc":"Decryption"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_sign","name":"phpseclib\\Crypt\\RSA::sign","doc":"Create a signature"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method_verify","name":"phpseclib\\Crypt\\RSA::verify","doc":"Verifies a signature"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\RSA","fromLink":"phpseclib/Crypt/RSA.html","link":"phpseclib/Crypt/RSA.html#method__extractBER","name":"phpseclib\\Crypt\\RSA::_extractBER","doc":"Extract raw BER from Base64 encoding"},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/Random.html","name":"phpseclib\\Crypt\\Random","doc":"Pure-PHP Random Number Generator"},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\Random","fromLink":"phpseclib/Crypt/Random.html","link":"phpseclib/Crypt/Random.html#method_string","name":"phpseclib\\Crypt\\Random::string","doc":"Generate a random string."},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/Rijndael.html","name":"phpseclib\\Crypt\\Rijndael","doc":"Pure-PHP implementation of Rijndael."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method_setKeyLength","name":"phpseclib\\Crypt\\Rijndael::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method_setBlockLength","name":"phpseclib\\Crypt\\Rijndael::setBlockLength","doc":"Sets the block length"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method_isValidEngine","name":"phpseclib\\Crypt\\Rijndael::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method__encryptBlock","name":"phpseclib\\Crypt\\Rijndael::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method__decryptBlock","name":"phpseclib\\Crypt\\Rijndael::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method__setupKey","name":"phpseclib\\Crypt\\Rijndael::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method__subWord","name":"phpseclib\\Crypt\\Rijndael::_subWord","doc":"Performs S-Box substitutions"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method__getTables","name":"phpseclib\\Crypt\\Rijndael::_getTables","doc":"Provides the mixColumns and sboxes tables"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method__getInvTables","name":"phpseclib\\Crypt\\Rijndael::_getInvTables","doc":"Provides the inverse mixColumns and inverse sboxes tables"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Rijndael","fromLink":"phpseclib/Crypt/Rijndael.html","link":"phpseclib/Crypt/Rijndael.html#method__setupInlineCrypt","name":"phpseclib\\Crypt\\Rijndael::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/TripleDES.html","name":"phpseclib\\Crypt\\TripleDES","doc":"Pure-PHP implementation of Triple DES."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method___construct","name":"phpseclib\\Crypt\\TripleDES::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_isValidEngine","name":"phpseclib\\Crypt\\TripleDES::isValidEngine","doc":"Test for engine validity"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_setIV","name":"phpseclib\\Crypt\\TripleDES::setIV","doc":"Sets the initialization vector. (optional)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_setKeyLength","name":"phpseclib\\Crypt\\TripleDES::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_setKey","name":"phpseclib\\Crypt\\TripleDES::setKey","doc":"Sets the key."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_encrypt","name":"phpseclib\\Crypt\\TripleDES::encrypt","doc":"Encrypts a message."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_decrypt","name":"phpseclib\\Crypt\\TripleDES::decrypt","doc":"Decrypts a message."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_enableContinuousBuffer","name":"phpseclib\\Crypt\\TripleDES::enableContinuousBuffer","doc":"Treat consecutive \"packets\" as if they are a continuous buffer."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_disableContinuousBuffer","name":"phpseclib\\Crypt\\TripleDES::disableContinuousBuffer","doc":"Treat consecutive packets as if they are a discontinuous buffer."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method__setupKey","name":"phpseclib\\Crypt\\TripleDES::_setupKey","doc":"Creates the key schedule"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\TripleDES","fromLink":"phpseclib/Crypt/TripleDES.html","link":"phpseclib/Crypt/TripleDES.html#method_setPreferredEngine","name":"phpseclib\\Crypt\\TripleDES::setPreferredEngine","doc":"Sets the internal crypt engine"},
            
                                                {"type":"Class","fromName":"phpseclib\\Crypt","fromLink":"phpseclib/Crypt.html","link":"phpseclib/Crypt/Twofish.html","name":"phpseclib\\Crypt\\Twofish","doc":"Pure-PHP implementation of Twofish."},
                                {"type":"Method","fromName":"phpseclib\\Crypt\\Twofish","fromLink":"phpseclib/Crypt/Twofish.html","link":"phpseclib/Crypt/Twofish.html#method_setKeyLength","name":"phpseclib\\Crypt\\Twofish::setKeyLength","doc":"Sets the key length."},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Twofish","fromLink":"phpseclib/Crypt/Twofish.html","link":"phpseclib/Crypt/Twofish.html#method__setupKey","name":"phpseclib\\Crypt\\Twofish::_setupKey","doc":"Setup the key (expansion)"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Twofish","fromLink":"phpseclib/Crypt/Twofish.html","link":"phpseclib/Crypt/Twofish.html#method__mdsrem","name":"phpseclib\\Crypt\\Twofish::_mdsrem","doc":"_mdsrem function using by the twofish cipher algorithm"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Twofish","fromLink":"phpseclib/Crypt/Twofish.html","link":"phpseclib/Crypt/Twofish.html#method__encryptBlock","name":"phpseclib\\Crypt\\Twofish::_encryptBlock","doc":"Encrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Twofish","fromLink":"phpseclib/Crypt/Twofish.html","link":"phpseclib/Crypt/Twofish.html#method__decryptBlock","name":"phpseclib\\Crypt\\Twofish::_decryptBlock","doc":"Decrypts a block"},
        {"type":"Method","fromName":"phpseclib\\Crypt\\Twofish","fromLink":"phpseclib/Crypt/Twofish.html","link":"phpseclib/Crypt/Twofish.html#method__setupInlineCrypt","name":"phpseclib\\Crypt\\Twofish::_setupInlineCrypt","doc":"Setup the performance-optimized function for de/encrypt()"},
            
                                                {"type":"Class","fromName":"phpseclib\\File","fromLink":"phpseclib/File.html","link":"phpseclib/File/ANSI.html","name":"phpseclib\\File\\ANSI","doc":"Pure-PHP ANSI Decoder"},
                                {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method___construct","name":"phpseclib\\File\\ANSI::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method_setDimensions","name":"phpseclib\\File\\ANSI::setDimensions","doc":"Set terminal width and height"},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method_setHistory","name":"phpseclib\\File\\ANSI::setHistory","doc":"Set the number of lines that should be logged past the terminal height"},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method_loadString","name":"phpseclib\\File\\ANSI::loadString","doc":"Load a string"},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method_appendString","name":"phpseclib\\File\\ANSI::appendString","doc":"Appdend a string"},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method__newLine","name":"phpseclib\\File\\ANSI::_newLine","doc":"Add a new line"},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method__processCoordinate","name":"phpseclib\\File\\ANSI::_processCoordinate","doc":"Returns the current coordinate without preformating"},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method__getScreen","name":"phpseclib\\File\\ANSI::_getScreen","doc":"Returns the current screen without preformating"},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method_getScreen","name":"phpseclib\\File\\ANSI::getScreen","doc":"Returns the current screen"},
        {"type":"Method","fromName":"phpseclib\\File\\ANSI","fromLink":"phpseclib/File/ANSI.html","link":"phpseclib/File/ANSI.html#method_getHistory","name":"phpseclib\\File\\ANSI::getHistory","doc":"Returns the current screen and the x previous lines"},
            
                                                {"type":"Class","fromName":"phpseclib\\File","fromLink":"phpseclib/File.html","link":"phpseclib/File/ASN1.html","name":"phpseclib\\File\\ASN1","doc":"Pure-PHP ASN.1 Parser"},
                                {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method_decodeBER","name":"phpseclib\\File\\ASN1::decodeBER","doc":"Parse BER-encoding"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method__decode_ber","name":"phpseclib\\File\\ASN1::_decode_ber","doc":"Parse BER-encoding (Helper function)"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method_asn1map","name":"phpseclib\\File\\ASN1::asn1map","doc":"ASN.1 Map"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method_encodeDER","name":"phpseclib\\File\\ASN1::encodeDER","doc":"ASN.1 Encode"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method__encode_der","name":"phpseclib\\File\\ASN1::_encode_der","doc":"ASN.1 Encode (Helper function)"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method__encodeLength","name":"phpseclib\\File\\ASN1::_encodeLength","doc":"DER-encode the length"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method__decodeOID","name":"phpseclib\\File\\ASN1::_decodeOID","doc":"BER-decode the OID"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method__encodeOID","name":"phpseclib\\File\\ASN1::_encodeOID","doc":"DER-encode the OID"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method__decodeTime","name":"phpseclib\\File\\ASN1::_decodeTime","doc":"BER-decode the time"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method_setTimeFormat","name":"phpseclib\\File\\ASN1::setTimeFormat","doc":"Set the time format"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method_loadOIDs","name":"phpseclib\\File\\ASN1::loadOIDs","doc":"Load OIDs"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method_loadFilters","name":"phpseclib\\File\\ASN1::loadFilters","doc":"Load filters"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method__string_shift","name":"phpseclib\\File\\ASN1::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1.html#method_convert","name":"phpseclib\\File\\ASN1::convert","doc":"String type conversion"},
            
                                                {"type":"Class","fromName":"phpseclib\\File\\ASN1","fromLink":"phpseclib/File/ASN1.html","link":"phpseclib/File/ASN1/Element.html","name":"phpseclib\\File\\ASN1\\Element","doc":"ASN.1 Element"},
                                {"type":"Method","fromName":"phpseclib\\File\\ASN1\\Element","fromLink":"phpseclib/File/ASN1/Element.html","link":"phpseclib/File/ASN1/Element.html#method___construct","name":"phpseclib\\File\\ASN1\\Element::__construct","doc":"Constructor"},
            
                                                {"type":"Class","fromName":"phpseclib\\File","fromLink":"phpseclib/File.html","link":"phpseclib/File/X509.html","name":"phpseclib\\File\\X509","doc":"Pure-PHP X.509 Parser"},
                                {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method___construct","name":"phpseclib\\File\\X509::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_loadX509","name":"phpseclib\\File\\X509::loadX509","doc":"Load X.509 certificate"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_saveX509","name":"phpseclib\\File\\X509::saveX509","doc":"Save X.509 certificate"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__mapInExtensions","name":"phpseclib\\File\\X509::_mapInExtensions","doc":"Map extension values from octet string to extension-specific internal\n  format."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__mapOutExtensions","name":"phpseclib\\File\\X509::_mapOutExtensions","doc":"Map extension values from extension-specific internal format to\n  octet string."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__mapInAttributes","name":"phpseclib\\File\\X509::_mapInAttributes","doc":"Map attribute values from ANY type to attribute-specific internal\n  format."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__mapOutAttributes","name":"phpseclib\\File\\X509::_mapOutAttributes","doc":"Map attribute values from attribute-specific internal format to\n  ANY type."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__mapInDNs","name":"phpseclib\\File\\X509::_mapInDNs","doc":"Map DN values from ANY type to DN-specific internal\n  format."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__mapOutDNs","name":"phpseclib\\File\\X509::_mapOutDNs","doc":"Map DN values from DN-specific internal format to\n  ANY type."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__getMapping","name":"phpseclib\\File\\X509::_getMapping","doc":"Associate an extension ID to an extension mapping"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_loadCA","name":"phpseclib\\File\\X509::loadCA","doc":"Load an X.509 certificate as a certificate authority"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_validateURL","name":"phpseclib\\File\\X509::validateURL","doc":"Validate an X.509 certificate against a URL"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_validateDate","name":"phpseclib\\File\\X509::validateDate","doc":"Validate a date"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__fetchURL","name":"phpseclib\\File\\X509::_fetchURL","doc":"Fetches a URL"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__testForIntermediate","name":"phpseclib\\File\\X509::_testForIntermediate","doc":"Validates an intermediate cert as identified via authority info access extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_validateSignature","name":"phpseclib\\File\\X509::validateSignature","doc":"Validate a signature"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__validateSignatureCountable","name":"phpseclib\\File\\X509::_validateSignatureCountable","doc":"Validate a signature"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__validateSignature","name":"phpseclib\\File\\X509::_validateSignature","doc":"Validates a signature"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setRecurLimit","name":"phpseclib\\File\\X509::setRecurLimit","doc":"Sets the recursion limit"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_disableURLFetch","name":"phpseclib\\File\\X509::disableURLFetch","doc":"Prevents URIs from being automatically retrieved"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_enableURLFetch","name":"phpseclib\\File\\X509::enableURLFetch","doc":"Allows URIs to be automatically retrieved"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__reformatKey","name":"phpseclib\\File\\X509::_reformatKey","doc":"Reformat public keys"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__decodeIP","name":"phpseclib\\File\\X509::_decodeIP","doc":"Decodes an IP address"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__decodeNameConstraintIP","name":"phpseclib\\File\\X509::_decodeNameConstraintIP","doc":"Decodes an IP address in a name constraints extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__encodeIP","name":"phpseclib\\File\\X509::_encodeIP","doc":"Encodes an IP address"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__translateDNProp","name":"phpseclib\\File\\X509::_translateDNProp","doc":"\"Normalizes\" a Distinguished Name property"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setDNProp","name":"phpseclib\\File\\X509::setDNProp","doc":"Set a Distinguished Name property"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_removeDNProp","name":"phpseclib\\File\\X509::removeDNProp","doc":"Remove Distinguished Name properties"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getDNProp","name":"phpseclib\\File\\X509::getDNProp","doc":"Get Distinguished Name properties"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setDN","name":"phpseclib\\File\\X509::setDN","doc":"Set a Distinguished Name"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getDN","name":"phpseclib\\File\\X509::getDN","doc":"Get the Distinguished Name for a certificates subject"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getIssuerDN","name":"phpseclib\\File\\X509::getIssuerDN","doc":"Get the Distinguished Name for a certificate/crl issuer"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getSubjectDN","name":"phpseclib\\File\\X509::getSubjectDN","doc":"Get the Distinguished Name for a certificate/csr subject\nAlias of getDN()"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getIssuerDNProp","name":"phpseclib\\File\\X509::getIssuerDNProp","doc":"Get an individual Distinguished Name property for a certificate/crl issuer"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getSubjectDNProp","name":"phpseclib\\File\\X509::getSubjectDNProp","doc":"Get an individual Distinguished Name property for a certificate/csr subject"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getChain","name":"phpseclib\\File\\X509::getChain","doc":"Get the certificate chain for the current cert"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setPublicKey","name":"phpseclib\\File\\X509::setPublicKey","doc":"Set public key"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setPrivateKey","name":"phpseclib\\File\\X509::setPrivateKey","doc":"Set private key"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setChallenge","name":"phpseclib\\File\\X509::setChallenge","doc":"Set challenge"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getPublicKey","name":"phpseclib\\File\\X509::getPublicKey","doc":"Gets the public key"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_loadCSR","name":"phpseclib\\File\\X509::loadCSR","doc":"Load a Certificate Signing Request"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_saveCSR","name":"phpseclib\\File\\X509::saveCSR","doc":"Save CSR request"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_loadSPKAC","name":"phpseclib\\File\\X509::loadSPKAC","doc":"Load a SPKAC CSR"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_saveSPKAC","name":"phpseclib\\File\\X509::saveSPKAC","doc":"Save a SPKAC CSR request"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_loadCRL","name":"phpseclib\\File\\X509::loadCRL","doc":"Load a Certificate Revocation List"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_saveCRL","name":"phpseclib\\File\\X509::saveCRL","doc":"Save Certificate Revocation List."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__timeField","name":"phpseclib\\File\\X509::_timeField","doc":"Helper function to build a time field according to RFC 3280 section\n - 4.1.2.5 Validity\n - 5.1.2.4 This Update\n - 5.1.2.5 Next Update\n - 5.1.2.6 Revoked Certificates\nby choosing utcTime iff year of date given is before 2050 and generalTime else."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_sign","name":"phpseclib\\File\\X509::sign","doc":"Sign an X.509 certificate"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_signCSR","name":"phpseclib\\File\\X509::signCSR","doc":"Sign a CSR"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_signSPKAC","name":"phpseclib\\File\\X509::signSPKAC","doc":"Sign a SPKAC"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_signCRL","name":"phpseclib\\File\\X509::signCRL","doc":"Sign a CRL"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__sign","name":"phpseclib\\File\\X509::_sign","doc":"X.509 certificate signing helper function."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setStartDate","name":"phpseclib\\File\\X509::setStartDate","doc":"Set certificate start date"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setEndDate","name":"phpseclib\\File\\X509::setEndDate","doc":"Set certificate end date"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setSerialNumber","name":"phpseclib\\File\\X509::setSerialNumber","doc":"Set Serial Number"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_makeCA","name":"phpseclib\\File\\X509::makeCA","doc":"Turns the certificate into a certificate authority"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__isSubArrayValid","name":"phpseclib\\File\\X509::_isSubArrayValid","doc":"Check for validity of subarray"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__subArrayUnchecked","name":"phpseclib\\File\\X509::_subArrayUnchecked","doc":"Get a reference to a subarray"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__subArray","name":"phpseclib\\File\\X509::_subArray","doc":"Get a reference to a subarray"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__extensions","name":"phpseclib\\File\\X509::_extensions","doc":"Get a reference to an extension subarray"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__removeExtension","name":"phpseclib\\File\\X509::_removeExtension","doc":"Remove an Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__getExtension","name":"phpseclib\\File\\X509::_getExtension","doc":"Get an Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__getExtensions","name":"phpseclib\\File\\X509::_getExtensions","doc":"Returns a list of all extensions in use"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__setExtension","name":"phpseclib\\File\\X509::_setExtension","doc":"Set an Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_removeExtension","name":"phpseclib\\File\\X509::removeExtension","doc":"Remove a certificate, CSR or CRL Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getExtension","name":"phpseclib\\File\\X509::getExtension","doc":"Get a certificate, CSR or CRL Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getExtensions","name":"phpseclib\\File\\X509::getExtensions","doc":"Returns a list of all extensions in use in certificate, CSR or CRL"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setExtension","name":"phpseclib\\File\\X509::setExtension","doc":"Set a certificate, CSR or CRL Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_removeAttribute","name":"phpseclib\\File\\X509::removeAttribute","doc":"Remove a CSR attribute."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getAttribute","name":"phpseclib\\File\\X509::getAttribute","doc":"Get a CSR attribute"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getAttributes","name":"phpseclib\\File\\X509::getAttributes","doc":"Returns a list of all CSR attributes in use"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setAttribute","name":"phpseclib\\File\\X509::setAttribute","doc":"Set a CSR attribute"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setKeyIdentifier","name":"phpseclib\\File\\X509::setKeyIdentifier","doc":"Sets the subject key identifier"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_computeKeyIdentifier","name":"phpseclib\\File\\X509::computeKeyIdentifier","doc":"Compute a public key identifier."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__formatSubjectPublicKey","name":"phpseclib\\File\\X509::_formatSubjectPublicKey","doc":"Format a public key as appropriate"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setDomain","name":"phpseclib\\File\\X509::setDomain","doc":"Set the domain name's which the cert is to be valid for"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setIPAddress","name":"phpseclib\\File\\X509::setIPAddress","doc":"Set the IP Addresses's which the cert is to be valid for"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__dnsName","name":"phpseclib\\File\\X509::_dnsName","doc":"Helper function to build domain array"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__iPAddress","name":"phpseclib\\File\\X509::_iPAddress","doc":"Helper function to build IP Address array"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__revokedCertificate","name":"phpseclib\\File\\X509::_revokedCertificate","doc":"Get the index of a revoked certificate."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_revoke","name":"phpseclib\\File\\X509::revoke","doc":"Revoke a certificate."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_unrevoke","name":"phpseclib\\File\\X509::unrevoke","doc":"Unrevoke a certificate."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getRevoked","name":"phpseclib\\File\\X509::getRevoked","doc":"Get a revoked certificate."},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_listRevoked","name":"phpseclib\\File\\X509::listRevoked","doc":"List revoked certificates"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_removeRevokedCertificateExtension","name":"phpseclib\\File\\X509::removeRevokedCertificateExtension","doc":"Remove a Revoked Certificate Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getRevokedCertificateExtension","name":"phpseclib\\File\\X509::getRevokedCertificateExtension","doc":"Get a Revoked Certificate Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getRevokedCertificateExtensions","name":"phpseclib\\File\\X509::getRevokedCertificateExtensions","doc":"Returns a list of all extensions in use for a given revoked certificate"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_setRevokedCertificateExtension","name":"phpseclib\\File\\X509::setRevokedCertificateExtension","doc":"Set a Revoked Certificate Extension"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method__extractBER","name":"phpseclib\\File\\X509::_extractBER","doc":"Extract raw BER from Base64 encoding"},
        {"type":"Method","fromName":"phpseclib\\File\\X509","fromLink":"phpseclib/File/X509.html","link":"phpseclib/File/X509.html#method_getOID","name":"phpseclib\\File\\X509::getOID","doc":"Returns the OID corresponding to a name"},
            
                                                {"type":"Class","fromName":"phpseclib\\Math","fromLink":"phpseclib/Math.html","link":"phpseclib/Math/BigInteger.html","name":"phpseclib\\Math\\BigInteger","doc":"Pure-PHP arbitrary precision integer arithmetic library. Supports base-2, base-10, base-16, and base-256\nnumbers."},
                                {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method___construct","name":"phpseclib\\Math\\BigInteger::__construct","doc":"Converts base-2, base-10, base-16, and binary strings (base-256) to BigIntegers."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_toBytes","name":"phpseclib\\Math\\BigInteger::toBytes","doc":"Converts a BigInteger to a byte string (eg. base-256)."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_toHex","name":"phpseclib\\Math\\BigInteger::toHex","doc":"Converts a BigInteger to a hex string (eg. base-16))."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_toBits","name":"phpseclib\\Math\\BigInteger::toBits","doc":"Converts a BigInteger to a bit string (eg. base-2)."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_toString","name":"phpseclib\\Math\\BigInteger::toString","doc":"Converts a BigInteger to a base-10 number."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_copy","name":"phpseclib\\Math\\BigInteger::copy","doc":"Copy an object"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method___toString","name":"phpseclib\\Math\\BigInteger::__toString","doc":"__toString() magic method"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method___clone","name":"phpseclib\\Math\\BigInteger::__clone","doc":"__clone() magic method"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method___sleep","name":"phpseclib\\Math\\BigInteger::__sleep","doc":"__sleep() magic method"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method___wakeup","name":"phpseclib\\Math\\BigInteger::__wakeup","doc":"__wakeup() magic method"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method___debugInfo","name":"phpseclib\\Math\\BigInteger::__debugInfo","doc":"__debugInfo() magic method"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_add","name":"phpseclib\\Math\\BigInteger::add","doc":"Adds two BigIntegers."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__add","name":"phpseclib\\Math\\BigInteger::_add","doc":"Performs addition."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_subtract","name":"phpseclib\\Math\\BigInteger::subtract","doc":"Subtracts two BigIntegers."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__subtract","name":"phpseclib\\Math\\BigInteger::_subtract","doc":"Performs subtraction."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_multiply","name":"phpseclib\\Math\\BigInteger::multiply","doc":"Multiplies two BigIntegers"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__multiply","name":"phpseclib\\Math\\BigInteger::_multiply","doc":"Performs multiplication."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__regularMultiply","name":"phpseclib\\Math\\BigInteger::_regularMultiply","doc":"Performs long multiplication on two BigIntegers"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__karatsuba","name":"phpseclib\\Math\\BigInteger::_karatsuba","doc":"Performs Karatsuba multiplication on two BigIntegers"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__square","name":"phpseclib\\Math\\BigInteger::_square","doc":"Performs squaring"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__baseSquare","name":"phpseclib\\Math\\BigInteger::_baseSquare","doc":"Performs traditional squaring on two BigIntegers"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__karatsubaSquare","name":"phpseclib\\Math\\BigInteger::_karatsubaSquare","doc":"Performs Karatsuba \"squaring\" on two BigIntegers"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_divide","name":"phpseclib\\Math\\BigInteger::divide","doc":"Divides two BigIntegers."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__divide_digit","name":"phpseclib\\Math\\BigInteger::_divide_digit","doc":"Divides a BigInteger by a regular integer"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_modPow","name":"phpseclib\\Math\\BigInteger::modPow","doc":"Performs modular exponentiation."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_powMod","name":"phpseclib\\Math\\BigInteger::powMod","doc":"Performs modular exponentiation."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__slidingWindow","name":"phpseclib\\Math\\BigInteger::_slidingWindow","doc":"Sliding Window k-ary Modular Exponentiation"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__reduce","name":"phpseclib\\Math\\BigInteger::_reduce","doc":"Modular reduction"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__prepareReduce","name":"phpseclib\\Math\\BigInteger::_prepareReduce","doc":"Modular reduction preperation"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__multiplyReduce","name":"phpseclib\\Math\\BigInteger::_multiplyReduce","doc":"Modular multiply"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__squareReduce","name":"phpseclib\\Math\\BigInteger::_squareReduce","doc":"Modular square"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__mod2","name":"phpseclib\\Math\\BigInteger::_mod2","doc":"Modulos for Powers of Two"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__barrett","name":"phpseclib\\Math\\BigInteger::_barrett","doc":"Barrett Modular Reduction"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__regularBarrett","name":"phpseclib\\Math\\BigInteger::_regularBarrett","doc":"(Regular) Barrett Modular Reduction"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__multiplyLower","name":"phpseclib\\Math\\BigInteger::_multiplyLower","doc":"Performs long multiplication up to $stop digits"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__montgomery","name":"phpseclib\\Math\\BigInteger::_montgomery","doc":"Montgomery Modular Reduction"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__montgomeryMultiply","name":"phpseclib\\Math\\BigInteger::_montgomeryMultiply","doc":"Montgomery Multiply"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__prepMontgomery","name":"phpseclib\\Math\\BigInteger::_prepMontgomery","doc":"Prepare a number for use in Montgomery Modular Reductions"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__modInverse67108864","name":"phpseclib\\Math\\BigInteger::_modInverse67108864","doc":"Modular Inverse of a number mod 2**26 (eg. 67108864)"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_modInverse","name":"phpseclib\\Math\\BigInteger::modInverse","doc":"Calculates modular inverses."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_extendedGCD","name":"phpseclib\\Math\\BigInteger::extendedGCD","doc":"Calculates the greatest common divisor and Bezout's identity."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_gcd","name":"phpseclib\\Math\\BigInteger::gcd","doc":"Calculates the greatest common divisor"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_abs","name":"phpseclib\\Math\\BigInteger::abs","doc":"Absolute value."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_compare","name":"phpseclib\\Math\\BigInteger::compare","doc":"Compares two numbers."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__compare","name":"phpseclib\\Math\\BigInteger::_compare","doc":"Compares two numbers."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_equals","name":"phpseclib\\Math\\BigInteger::equals","doc":"Tests the equality of two numbers."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_setPrecision","name":"phpseclib\\Math\\BigInteger::setPrecision","doc":"Set Precision"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_bitwise_and","name":"phpseclib\\Math\\BigInteger::bitwise_and","doc":"Logical And"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_bitwise_or","name":"phpseclib\\Math\\BigInteger::bitwise_or","doc":"Logical Or"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_bitwise_xor","name":"phpseclib\\Math\\BigInteger::bitwise_xor","doc":"Logical Exclusive-Or"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_bitwise_not","name":"phpseclib\\Math\\BigInteger::bitwise_not","doc":"Logical Not"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_bitwise_rightShift","name":"phpseclib\\Math\\BigInteger::bitwise_rightShift","doc":"Logical Right Shift"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_bitwise_leftShift","name":"phpseclib\\Math\\BigInteger::bitwise_leftShift","doc":"Logical Left Shift"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_bitwise_leftRotate","name":"phpseclib\\Math\\BigInteger::bitwise_leftRotate","doc":"Logical Left Rotate"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_bitwise_rightRotate","name":"phpseclib\\Math\\BigInteger::bitwise_rightRotate","doc":"Logical Right Rotate"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__random_number_helper","name":"phpseclib\\Math\\BigInteger::_random_number_helper","doc":"Generates a random BigInteger"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_random","name":"phpseclib\\Math\\BigInteger::random","doc":"Generate a random number"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_randomPrime","name":"phpseclib\\Math\\BigInteger::randomPrime","doc":"Generate a random prime number."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__make_odd","name":"phpseclib\\Math\\BigInteger::_make_odd","doc":"Make the current number odd"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method_isPrime","name":"phpseclib\\Math\\BigInteger::isPrime","doc":"Checks a numer to see if it's prime"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__lshift","name":"phpseclib\\Math\\BigInteger::_lshift","doc":"Logical Left Shift"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__rshift","name":"phpseclib\\Math\\BigInteger::_rshift","doc":"Logical Right Shift"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__normalize","name":"phpseclib\\Math\\BigInteger::_normalize","doc":"Normalize"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__trim","name":"phpseclib\\Math\\BigInteger::_trim","doc":"Trim"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__array_repeat","name":"phpseclib\\Math\\BigInteger::_array_repeat","doc":"Array Repeat"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__base256_lshift","name":"phpseclib\\Math\\BigInteger::_base256_lshift","doc":"Logical Left Shift"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__base256_rshift","name":"phpseclib\\Math\\BigInteger::_base256_rshift","doc":"Logical Right Shift"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__int2bytes","name":"phpseclib\\Math\\BigInteger::_int2bytes","doc":"Converts 32-bit integers to bytes."},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__bytes2int","name":"phpseclib\\Math\\BigInteger::_bytes2int","doc":"Converts bytes to 32-bit integers"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__encodeASN1Length","name":"phpseclib\\Math\\BigInteger::_encodeASN1Length","doc":"DER-encode an integer"},
        {"type":"Method","fromName":"phpseclib\\Math\\BigInteger","fromLink":"phpseclib/Math/BigInteger.html","link":"phpseclib/Math/BigInteger.html#method__safe_divide","name":"phpseclib\\Math\\BigInteger::_safe_divide","doc":"Single digit division"},
            
                                                {"type":"Class","fromName":"phpseclib\\Net","fromLink":"phpseclib/Net.html","link":"phpseclib/Net/SCP.html","name":"phpseclib\\Net\\SCP","doc":"Pure-PHP implementations of SCP."},
                                {"type":"Method","fromName":"phpseclib\\Net\\SCP","fromLink":"phpseclib/Net/SCP.html","link":"phpseclib/Net/SCP.html#method___construct","name":"phpseclib\\Net\\SCP::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\Net\\SCP","fromLink":"phpseclib/Net/SCP.html","link":"phpseclib/Net/SCP.html#method_put","name":"phpseclib\\Net\\SCP::put","doc":"Uploads a file to the SCP server."},
        {"type":"Method","fromName":"phpseclib\\Net\\SCP","fromLink":"phpseclib/Net/SCP.html","link":"phpseclib/Net/SCP.html#method_get","name":"phpseclib\\Net\\SCP::get","doc":"Downloads a file from the SCP server."},
        {"type":"Method","fromName":"phpseclib\\Net\\SCP","fromLink":"phpseclib/Net/SCP.html","link":"phpseclib/Net/SCP.html#method__send","name":"phpseclib\\Net\\SCP::_send","doc":"Sends a packet to an SSH server"},
        {"type":"Method","fromName":"phpseclib\\Net\\SCP","fromLink":"phpseclib/Net/SCP.html","link":"phpseclib/Net/SCP.html#method__receive","name":"phpseclib\\Net\\SCP::_receive","doc":"Receives a packet from an SSH server"},
        {"type":"Method","fromName":"phpseclib\\Net\\SCP","fromLink":"phpseclib/Net/SCP.html","link":"phpseclib/Net/SCP.html#method__close","name":"phpseclib\\Net\\SCP::_close","doc":"Closes the connection to an SSH server"},
            
                                                {"type":"Class","fromName":"phpseclib\\Net","fromLink":"phpseclib/Net.html","link":"phpseclib/Net/SFTP.html","name":"phpseclib\\Net\\SFTP","doc":"Pure-PHP implementations of SFTP."},
                                {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method___construct","name":"phpseclib\\Net\\SFTP::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_login","name":"phpseclib\\Net\\SFTP::login","doc":"Login"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_disableStatCache","name":"phpseclib\\Net\\SFTP::disableStatCache","doc":"Disable the stat cache"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_enableStatCache","name":"phpseclib\\Net\\SFTP::enableStatCache","doc":"Enable the stat cache"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_clearStatCache","name":"phpseclib\\Net\\SFTP::clearStatCache","doc":"Clear the stat cache"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_enablePathCanonicalization","name":"phpseclib\\Net\\SFTP::enablePathCanonicalization","doc":"Enable path canonicalization"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_disablePathCanonicalization","name":"phpseclib\\Net\\SFTP::disablePathCanonicalization","doc":"Enable path canonicalization"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_pwd","name":"phpseclib\\Net\\SFTP::pwd","doc":"Returns the current directory name"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__logError","name":"phpseclib\\Net\\SFTP::_logError","doc":"Logs errors"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_realpath","name":"phpseclib\\Net\\SFTP::realpath","doc":"Returns canonicalized absolute pathname"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__realpath","name":"phpseclib\\Net\\SFTP::_realpath","doc":"Canonicalize the Server-Side Path Name"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_chdir","name":"phpseclib\\Net\\SFTP::chdir","doc":"Changes the current directory"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_nlist","name":"phpseclib\\Net\\SFTP::nlist","doc":"Returns a list of files in the given directory"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__nlist_helper","name":"phpseclib\\Net\\SFTP::_nlist_helper","doc":"Helper method for nlist"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_rawlist","name":"phpseclib\\Net\\SFTP::rawlist","doc":"Returns a detailed list of files in the given directory"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__list","name":"phpseclib\\Net\\SFTP::_list","doc":"Reads a list, be it detailed or not, of files in the given directory"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__comparator","name":"phpseclib\\Net\\SFTP::_comparator","doc":"Compares two rawlist entries using parameters set by setListOrder()"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_setListOrder","name":"phpseclib\\Net\\SFTP::setListOrder","doc":"Defines how nlist() and rawlist() will be sorted - if at all."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_size","name":"phpseclib\\Net\\SFTP::size","doc":"Returns the file size, in bytes, or false, on failure"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__update_stat_cache","name":"phpseclib\\Net\\SFTP::_update_stat_cache","doc":"Save files / directories to cache"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__remove_from_stat_cache","name":"phpseclib\\Net\\SFTP::_remove_from_stat_cache","doc":"Remove files / directories from cache"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__query_stat_cache","name":"phpseclib\\Net\\SFTP::_query_stat_cache","doc":"Checks cache for path"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_stat","name":"phpseclib\\Net\\SFTP::stat","doc":"Returns general information about a file."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_lstat","name":"phpseclib\\Net\\SFTP::lstat","doc":"Returns general information about a file or symbolic link."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__stat","name":"phpseclib\\Net\\SFTP::_stat","doc":"Returns general information about a file or symbolic link"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_truncate","name":"phpseclib\\Net\\SFTP::truncate","doc":"Truncates a file to a given length"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_touch","name":"phpseclib\\Net\\SFTP::touch","doc":"Sets access and modification time of file."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_chown","name":"phpseclib\\Net\\SFTP::chown","doc":"Changes file or directory owner"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_chgrp","name":"phpseclib\\Net\\SFTP::chgrp","doc":"Changes file or directory group"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_chmod","name":"phpseclib\\Net\\SFTP::chmod","doc":"Set permissions on a file."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__setstat","name":"phpseclib\\Net\\SFTP::_setstat","doc":"Sets information about a file"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__setstat_recursive","name":"phpseclib\\Net\\SFTP::_setstat_recursive","doc":"Recursively sets information on directories on the SFTP server"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_readlink","name":"phpseclib\\Net\\SFTP::readlink","doc":"Return the target of a symbolic link"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_symlink","name":"phpseclib\\Net\\SFTP::symlink","doc":"Create a symlink"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_mkdir","name":"phpseclib\\Net\\SFTP::mkdir","doc":"Creates a directory."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__mkdir_helper","name":"phpseclib\\Net\\SFTP::_mkdir_helper","doc":"Helper function for directory creation"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_rmdir","name":"phpseclib\\Net\\SFTP::rmdir","doc":"Removes a directory."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_put","name":"phpseclib\\Net\\SFTP::put","doc":"Uploads a file to the SFTP server."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__read_put_responses","name":"phpseclib\\Net\\SFTP::_read_put_responses","doc":"Reads multiple successive SSH_FXP_WRITE responses"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__close_handle","name":"phpseclib\\Net\\SFTP::_close_handle","doc":"Close handle"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_get","name":"phpseclib\\Net\\SFTP::get","doc":"Downloads a file from the SFTP server."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_delete","name":"phpseclib\\Net\\SFTP::delete","doc":"Deletes a file on the SFTP server."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__delete_recursive","name":"phpseclib\\Net\\SFTP::_delete_recursive","doc":"Recursively deletes directories on the SFTP server"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_file_exists","name":"phpseclib\\Net\\SFTP::file_exists","doc":"Checks whether a file or directory exists"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_is_dir","name":"phpseclib\\Net\\SFTP::is_dir","doc":"Tells whether the filename is a directory"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_is_file","name":"phpseclib\\Net\\SFTP::is_file","doc":"Tells whether the filename is a regular file"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_is_link","name":"phpseclib\\Net\\SFTP::is_link","doc":"Tells whether the filename is a symbolic link"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_is_readable","name":"phpseclib\\Net\\SFTP::is_readable","doc":"Tells whether a file exists and is readable"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_is_writable","name":"phpseclib\\Net\\SFTP::is_writable","doc":"Tells whether the filename is writable"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_is_writeable","name":"phpseclib\\Net\\SFTP::is_writeable","doc":"Tells whether the filename is writeable"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_fileatime","name":"phpseclib\\Net\\SFTP::fileatime","doc":"Gets last access time of file"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_filemtime","name":"phpseclib\\Net\\SFTP::filemtime","doc":"Gets file modification time"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_fileperms","name":"phpseclib\\Net\\SFTP::fileperms","doc":"Gets file permissions"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_fileowner","name":"phpseclib\\Net\\SFTP::fileowner","doc":"Gets file owner"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_filegroup","name":"phpseclib\\Net\\SFTP::filegroup","doc":"Gets file group"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_filesize","name":"phpseclib\\Net\\SFTP::filesize","doc":"Gets file size"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_filetype","name":"phpseclib\\Net\\SFTP::filetype","doc":"Gets file type"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__get_stat_cache_prop","name":"phpseclib\\Net\\SFTP::_get_stat_cache_prop","doc":"Return a stat properity"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__get_lstat_cache_prop","name":"phpseclib\\Net\\SFTP::_get_lstat_cache_prop","doc":"Return an lstat properity"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__get_xstat_cache_prop","name":"phpseclib\\Net\\SFTP::_get_xstat_cache_prop","doc":"Return a stat or lstat properity"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_rename","name":"phpseclib\\Net\\SFTP::rename","doc":"Renames a file or a directory on the SFTP server"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__parseAttributes","name":"phpseclib\\Net\\SFTP::_parseAttributes","doc":"Parse Attributes"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__parseMode","name":"phpseclib\\Net\\SFTP::_parseMode","doc":"Attempt to identify the file type"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__parseLongname","name":"phpseclib\\Net\\SFTP::_parseLongname","doc":"Parse Longname"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__send_sftp_packet","name":"phpseclib\\Net\\SFTP::_send_sftp_packet","doc":"Sends SFTP Packets"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__reset_connection","name":"phpseclib\\Net\\SFTP::_reset_connection","doc":"Resets a connection for re-use"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__get_sftp_packet","name":"phpseclib\\Net\\SFTP::_get_sftp_packet","doc":"Receives SFTP Packets"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_getSFTPLog","name":"phpseclib\\Net\\SFTP::getSFTPLog","doc":"Returns a log of the packets that have been sent and received."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_getSFTPErrors","name":"phpseclib\\Net\\SFTP::getSFTPErrors","doc":"Returns all errors"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_getLastSFTPError","name":"phpseclib\\Net\\SFTP::getLastSFTPError","doc":"Returns the last error"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_getSupportedVersions","name":"phpseclib\\Net\\SFTP::getSupportedVersions","doc":"Get supported SFTP versions"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method__disconnect","name":"phpseclib\\Net\\SFTP::_disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_enableDatePreservation","name":"phpseclib\\Net\\SFTP::enableDatePreservation","doc":"Enable Date Preservation"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP.html#method_disableDatePreservation","name":"phpseclib\\Net\\SFTP::disableDatePreservation","doc":"Disable Date Preservation"},
            
                                                {"type":"Class","fromName":"phpseclib\\Net\\SFTP","fromLink":"phpseclib/Net/SFTP.html","link":"phpseclib/Net/SFTP/Stream.html","name":"phpseclib\\Net\\SFTP\\Stream","doc":"SFTP Stream Wrapper"},
                                {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method_register","name":"phpseclib\\Net\\SFTP\\Stream::register","doc":"Registers this class as a URL wrapper."},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method___construct","name":"phpseclib\\Net\\SFTP\\Stream::__construct","doc":"The Constructor"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__parse_path","name":"phpseclib\\Net\\SFTP\\Stream::_parse_path","doc":"Path Parser"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_open","name":"phpseclib\\Net\\SFTP\\Stream::_stream_open","doc":"Opens file or URL"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_read","name":"phpseclib\\Net\\SFTP\\Stream::_stream_read","doc":"Read from stream"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_write","name":"phpseclib\\Net\\SFTP\\Stream::_stream_write","doc":"Write to stream"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_tell","name":"phpseclib\\Net\\SFTP\\Stream::_stream_tell","doc":"Retrieve the current position of a stream"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_eof","name":"phpseclib\\Net\\SFTP\\Stream::_stream_eof","doc":"Tests for end-of-file on a file pointer"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_seek","name":"phpseclib\\Net\\SFTP\\Stream::_stream_seek","doc":"Seeks to specific location in a stream"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_metadata","name":"phpseclib\\Net\\SFTP\\Stream::_stream_metadata","doc":"Change stream options"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_cast","name":"phpseclib\\Net\\SFTP\\Stream::_stream_cast","doc":"Retrieve the underlaying resource"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_lock","name":"phpseclib\\Net\\SFTP\\Stream::_stream_lock","doc":"Advisory file locking"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__rename","name":"phpseclib\\Net\\SFTP\\Stream::_rename","doc":"Renames a file or directory"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__dir_opendir","name":"phpseclib\\Net\\SFTP\\Stream::_dir_opendir","doc":"Open directory handle"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__dir_readdir","name":"phpseclib\\Net\\SFTP\\Stream::_dir_readdir","doc":"Read entry from directory handle"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__dir_rewinddir","name":"phpseclib\\Net\\SFTP\\Stream::_dir_rewinddir","doc":"Rewind directory handle"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__dir_closedir","name":"phpseclib\\Net\\SFTP\\Stream::_dir_closedir","doc":"Close directory handle"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__mkdir","name":"phpseclib\\Net\\SFTP\\Stream::_mkdir","doc":"Create a directory"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__rmdir","name":"phpseclib\\Net\\SFTP\\Stream::_rmdir","doc":"Removes a directory"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_flush","name":"phpseclib\\Net\\SFTP\\Stream::_stream_flush","doc":"Flushes the output"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_stat","name":"phpseclib\\Net\\SFTP\\Stream::_stream_stat","doc":"Retrieve information about a file resource"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__unlink","name":"phpseclib\\Net\\SFTP\\Stream::_unlink","doc":"Delete a file"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__url_stat","name":"phpseclib\\Net\\SFTP\\Stream::_url_stat","doc":"Retrieve information about a file"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_truncate","name":"phpseclib\\Net\\SFTP\\Stream::_stream_truncate","doc":"Truncate stream"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_set_option","name":"phpseclib\\Net\\SFTP\\Stream::_stream_set_option","doc":"Change stream options"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method__stream_close","name":"phpseclib\\Net\\SFTP\\Stream::_stream_close","doc":"Close an resource"},
        {"type":"Method","fromName":"phpseclib\\Net\\SFTP\\Stream","fromLink":"phpseclib/Net/SFTP/Stream.html","link":"phpseclib/Net/SFTP/Stream.html#method___call","name":"phpseclib\\Net\\SFTP\\Stream::__call","doc":"__call Magic Method"},
            
                                                {"type":"Class","fromName":"phpseclib\\Net","fromLink":"phpseclib/Net.html","link":"phpseclib/Net/SSH1.html","name":"phpseclib\\Net\\SSH1","doc":"Pure-PHP implementation of SSHv1."},
                                {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method___construct","name":"phpseclib\\Net\\SSH1::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__connect","name":"phpseclib\\Net\\SSH1::_connect","doc":"Connect to an SSHv1 server"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_login","name":"phpseclib\\Net\\SSH1::login","doc":"Login"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_setTimeout","name":"phpseclib\\Net\\SSH1::setTimeout","doc":"Set Timeout"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_exec","name":"phpseclib\\Net\\SSH1::exec","doc":"Executes a command on a non-interactive shell, returns the output, and quits."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__initShell","name":"phpseclib\\Net\\SSH1::_initShell","doc":"Creates an interactive shell"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_write","name":"phpseclib\\Net\\SSH1::write","doc":"Inputs a command into an interactive shell."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_read","name":"phpseclib\\Net\\SSH1::read","doc":"Returns the output of an interactive shell when there's a match for $expect"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_interactiveWrite","name":"phpseclib\\Net\\SSH1::interactiveWrite","doc":"Inputs a command into an interactive shell."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_interactiveRead","name":"phpseclib\\Net\\SSH1::interactiveRead","doc":"Returns the output of an interactive shell when no more output is available."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_disconnect","name":"phpseclib\\Net\\SSH1::disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method___destruct","name":"phpseclib\\Net\\SSH1::__destruct","doc":"Destructor."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__disconnect","name":"phpseclib\\Net\\SSH1::_disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__get_binary_packet","name":"phpseclib\\Net\\SSH1::_get_binary_packet","doc":"Gets Binary Packets"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__send_binary_packet","name":"phpseclib\\Net\\SSH1::_send_binary_packet","doc":"Sends Binary Packets"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__crc","name":"phpseclib\\Net\\SSH1::_crc","doc":"Cyclic Redundancy Check (CRC)"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__string_shift","name":"phpseclib\\Net\\SSH1::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__rsa_crypt","name":"phpseclib\\Net\\SSH1::_rsa_crypt","doc":"RSA Encrypt"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__define_array","name":"phpseclib\\Net\\SSH1::_define_array","doc":"Define Array"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_getLog","name":"phpseclib\\Net\\SSH1::getLog","doc":"Returns a log of the packets that have been sent and received."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__format_log","name":"phpseclib\\Net\\SSH1::_format_log","doc":"Formats a log for printing"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__format_log_helper","name":"phpseclib\\Net\\SSH1::_format_log_helper","doc":"Helper function for _format_log"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_getServerKeyPublicExponent","name":"phpseclib\\Net\\SSH1::getServerKeyPublicExponent","doc":"Return the server key public exponent"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_getServerKeyPublicModulus","name":"phpseclib\\Net\\SSH1::getServerKeyPublicModulus","doc":"Return the server key public modulus"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_getHostKeyPublicExponent","name":"phpseclib\\Net\\SSH1::getHostKeyPublicExponent","doc":"Return the host key public exponent"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_getHostKeyPublicModulus","name":"phpseclib\\Net\\SSH1::getHostKeyPublicModulus","doc":"Return the host key public modulus"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_getSupportedCiphers","name":"phpseclib\\Net\\SSH1::getSupportedCiphers","doc":"Return a list of ciphers supported by SSH1 server."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_getSupportedAuthentications","name":"phpseclib\\Net\\SSH1::getSupportedAuthentications","doc":"Return a list of authentications supported by SSH1 server."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method_getServerIdentification","name":"phpseclib\\Net\\SSH1::getServerIdentification","doc":"Return the server identification."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH1","fromLink":"phpseclib/Net/SSH1.html","link":"phpseclib/Net/SSH1.html#method__append_log","name":"phpseclib\\Net\\SSH1::_append_log","doc":"Logs data packets"},
            
                                                {"type":"Class","fromName":"phpseclib\\Net","fromLink":"phpseclib/Net.html","link":"phpseclib/Net/SSH2.html","name":"phpseclib\\Net\\SSH2","doc":"Pure-PHP implementation of SSHv2."},
                                {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method___construct","name":"phpseclib\\Net\\SSH2::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_setCryptoEngine","name":"phpseclib\\Net\\SSH2::setCryptoEngine","doc":"Set Crypto Engine Mode"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_sendIdentificationStringFirst","name":"phpseclib\\Net\\SSH2::sendIdentificationStringFirst","doc":"Send Identification String First"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_sendIdentificationStringLast","name":"phpseclib\\Net\\SSH2::sendIdentificationStringLast","doc":"Send Identification String Last"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_sendKEXINITFirst","name":"phpseclib\\Net\\SSH2::sendKEXINITFirst","doc":"Send SSH_MSG_KEXINIT First"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_sendKEXINITLast","name":"phpseclib\\Net\\SSH2::sendKEXINITLast","doc":"Send SSH_MSG_KEXINIT Last"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__connect","name":"phpseclib\\Net\\SSH2::_connect","doc":"Connect to an SSHv2 server"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__generate_identifier","name":"phpseclib\\Net\\SSH2::_generate_identifier","doc":"Generates the SSH identifier"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__key_exchange","name":"phpseclib\\Net\\SSH2::_key_exchange","doc":"Key Exchange"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__encryption_algorithm_to_key_size","name":"phpseclib\\Net\\SSH2::_encryption_algorithm_to_key_size","doc":"Maps an encryption algorithm name to the number of key bytes."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__encryption_algorithm_to_crypt_instance","name":"phpseclib\\Net\\SSH2::_encryption_algorithm_to_crypt_instance","doc":"Maps an encryption algorithm name to an instance of a subclass of\n\\phpseclib\\Crypt\\Base."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__bad_algorithm_candidate","name":"phpseclib\\Net\\SSH2::_bad_algorithm_candidate","doc":"Tests whether or not proposed algorithm has a potential for issues"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_login","name":"phpseclib\\Net\\SSH2::login","doc":"Login"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__login","name":"phpseclib\\Net\\SSH2::_login","doc":"Login Helper"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__login_helper","name":"phpseclib\\Net\\SSH2::_login_helper","doc":"Login Helper"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__keyboard_interactive_login","name":"phpseclib\\Net\\SSH2::_keyboard_interactive_login","doc":"Login via keyboard-interactive authentication"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__keyboard_interactive_process","name":"phpseclib\\Net\\SSH2::_keyboard_interactive_process","doc":"Handle the keyboard-interactive requests / responses."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__ssh_agent_login","name":"phpseclib\\Net\\SSH2::_ssh_agent_login","doc":"Login with an ssh-agent provided key"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__privatekey_login","name":"phpseclib\\Net\\SSH2::_privatekey_login","doc":"Login with an RSA private key"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_setTimeout","name":"phpseclib\\Net\\SSH2::setTimeout","doc":"Set Timeout"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getStdError","name":"phpseclib\\Net\\SSH2::getStdError","doc":"Get the output from stdError"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_exec","name":"phpseclib\\Net\\SSH2::exec","doc":"Execute Command"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__initShell","name":"phpseclib\\Net\\SSH2::_initShell","doc":"Creates an interactive shell"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__get_interactive_channel","name":"phpseclib\\Net\\SSH2::_get_interactive_channel","doc":"Return the channel to be used with read() / write()"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__get_open_channel","name":"phpseclib\\Net\\SSH2::_get_open_channel","doc":"Return an available open channel"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_read","name":"phpseclib\\Net\\SSH2::read","doc":"Returns the output of an interactive shell"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_write","name":"phpseclib\\Net\\SSH2::write","doc":"Inputs a command into an interactive shell."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_startSubsystem","name":"phpseclib\\Net\\SSH2::startSubsystem","doc":"Start a subsystem."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_stopSubsystem","name":"phpseclib\\Net\\SSH2::stopSubsystem","doc":"Stops a subsystem."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_reset","name":"phpseclib\\Net\\SSH2::reset","doc":"Closes a channel"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_isTimeout","name":"phpseclib\\Net\\SSH2::isTimeout","doc":"Is timeout?"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_disconnect","name":"phpseclib\\Net\\SSH2::disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method___destruct","name":"phpseclib\\Net\\SSH2::__destruct","doc":"Destructor."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_isConnected","name":"phpseclib\\Net\\SSH2::isConnected","doc":"Is the connection still active?"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_isAuthenticated","name":"phpseclib\\Net\\SSH2::isAuthenticated","doc":"Have you successfully been logged in?"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_ping","name":"phpseclib\\Net\\SSH2::ping","doc":"Pings a server connection, or tries to reconnect if the connection has gone down"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__reconnect","name":"phpseclib\\Net\\SSH2::_reconnect","doc":"In situ reconnect method"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__reset_connection","name":"phpseclib\\Net\\SSH2::_reset_connection","doc":"Resets a connection for re-use"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__get_binary_packet","name":"phpseclib\\Net\\SSH2::_get_binary_packet","doc":"Gets Binary Packets"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__filter","name":"phpseclib\\Net\\SSH2::_filter","doc":"Filter Binary Packets"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_enableQuietMode","name":"phpseclib\\Net\\SSH2::enableQuietMode","doc":"Enable Quiet Mode"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_disableQuietMode","name":"phpseclib\\Net\\SSH2::disableQuietMode","doc":"Disable Quiet Mode"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_isQuietModeEnabled","name":"phpseclib\\Net\\SSH2::isQuietModeEnabled","doc":"Returns whether Quiet Mode is enabled or not"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_enablePTY","name":"phpseclib\\Net\\SSH2::enablePTY","doc":"Enable request-pty when using exec()"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_disablePTY","name":"phpseclib\\Net\\SSH2::disablePTY","doc":"Disable request-pty when using exec()"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_isPTYEnabled","name":"phpseclib\\Net\\SSH2::isPTYEnabled","doc":"Returns whether request-pty is enabled or not"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__get_channel_packet","name":"phpseclib\\Net\\SSH2::_get_channel_packet","doc":"Gets channel data"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__send_binary_packet","name":"phpseclib\\Net\\SSH2::_send_binary_packet","doc":"Sends Binary Packets"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__append_log","name":"phpseclib\\Net\\SSH2::_append_log","doc":"Logs data packets"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__send_channel_packet","name":"phpseclib\\Net\\SSH2::_send_channel_packet","doc":"Sends channel data"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__close_channel","name":"phpseclib\\Net\\SSH2::_close_channel","doc":"Closes and flushes a channel"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__disconnect","name":"phpseclib\\Net\\SSH2::_disconnect","doc":"Disconnect"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__string_shift","name":"phpseclib\\Net\\SSH2::_string_shift","doc":"String Shift"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__define_array","name":"phpseclib\\Net\\SSH2::_define_array","doc":"Define Array"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getLog","name":"phpseclib\\Net\\SSH2::getLog","doc":"Returns a log of the packets that have been sent and received."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__format_log","name":"phpseclib\\Net\\SSH2::_format_log","doc":"Formats a log for printing"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__format_log_helper","name":"phpseclib\\Net\\SSH2::_format_log_helper","doc":"Helper function for _format_log"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__on_channel_open","name":"phpseclib\\Net\\SSH2::_on_channel_open","doc":"Helper function for agent->_on_channel_open()"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__array_intersect_first","name":"phpseclib\\Net\\SSH2::_array_intersect_first","doc":"Returns the first value of the intersection of two arrays or false if\nthe intersection is empty. The order is defined by the first parameter."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getErrors","name":"phpseclib\\Net\\SSH2::getErrors","doc":"Returns all errors"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getLastError","name":"phpseclib\\Net\\SSH2::getLastError","doc":"Returns the last error"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getServerIdentification","name":"phpseclib\\Net\\SSH2::getServerIdentification","doc":"Return the server identification."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getKexAlgorithms","name":"phpseclib\\Net\\SSH2::getKexAlgorithms","doc":"Return a list of the key exchange algorithms the server supports."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getServerHostKeyAlgorithms","name":"phpseclib\\Net\\SSH2::getServerHostKeyAlgorithms","doc":"Return a list of the host key (public key) algorithms the server supports."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getEncryptionAlgorithmsClient2Server","name":"phpseclib\\Net\\SSH2::getEncryptionAlgorithmsClient2Server","doc":"Return a list of the (symmetric key) encryption algorithms the server supports, when receiving stuff from the client."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getEncryptionAlgorithmsServer2Client","name":"phpseclib\\Net\\SSH2::getEncryptionAlgorithmsServer2Client","doc":"Return a list of the (symmetric key) encryption algorithms the server supports, when sending stuff to the client."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getMACAlgorithmsClient2Server","name":"phpseclib\\Net\\SSH2::getMACAlgorithmsClient2Server","doc":"Return a list of the MAC algorithms the server supports, when receiving stuff from the client."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getMACAlgorithmsServer2Client","name":"phpseclib\\Net\\SSH2::getMACAlgorithmsServer2Client","doc":"Return a list of the MAC algorithms the server supports, when sending stuff to the client."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getCompressionAlgorithmsClient2Server","name":"phpseclib\\Net\\SSH2::getCompressionAlgorithmsClient2Server","doc":"Return a list of the compression algorithms the server supports, when receiving stuff from the client."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getCompressionAlgorithmsServer2Client","name":"phpseclib\\Net\\SSH2::getCompressionAlgorithmsServer2Client","doc":"Return a list of the compression algorithms the server supports, when sending stuff to the client."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getLanguagesServer2Client","name":"phpseclib\\Net\\SSH2::getLanguagesServer2Client","doc":"Return a list of the languages the server supports, when sending stuff to the client."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getLanguagesClient2Server","name":"phpseclib\\Net\\SSH2::getLanguagesClient2Server","doc":"Return a list of the languages the server supports, when receiving stuff from the client."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getServerAlgorithms","name":"phpseclib\\Net\\SSH2::getServerAlgorithms","doc":"Returns a list of algorithms the server supports"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getSupportedKEXAlgorithms","name":"phpseclib\\Net\\SSH2::getSupportedKEXAlgorithms","doc":"Returns a list of KEX algorithms that phpseclib supports"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getSupportedHostKeyAlgorithms","name":"phpseclib\\Net\\SSH2::getSupportedHostKeyAlgorithms","doc":"Returns a list of host key algorithms that phpseclib supports"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getSupportedEncryptionAlgorithms","name":"phpseclib\\Net\\SSH2::getSupportedEncryptionAlgorithms","doc":"Returns a list of symmetric key algorithms that phpseclib supports"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getSupportedMACAlgorithms","name":"phpseclib\\Net\\SSH2::getSupportedMACAlgorithms","doc":"Returns a list of MAC algorithms that phpseclib supports"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getSupportedCompressionAlgorithms","name":"phpseclib\\Net\\SSH2::getSupportedCompressionAlgorithms","doc":"Returns a list of compression algorithms that phpseclib supports"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getAlgorithmsNegotiated","name":"phpseclib\\Net\\SSH2::getAlgorithmsNegotiated","doc":"Return list of negotiated algorithms"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_setPreferredAlgorithms","name":"phpseclib\\Net\\SSH2::setPreferredAlgorithms","doc":"Accepts an associative array with up to four parameters as described at\n<a href=\"https://www.php.net/manual/en/function.ssh2-connect.php\">https://www.php.net/manual/en/function.ssh2-connect.php</a>"},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getBannerMessage","name":"phpseclib\\Net\\SSH2::getBannerMessage","doc":"Returns the banner message."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getServerPublicHostKey","name":"phpseclib\\Net\\SSH2::getServerPublicHostKey","doc":"Returns the server public host key."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getExitStatus","name":"phpseclib\\Net\\SSH2::getExitStatus","doc":"Returns the exit status of an SSH command or false."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getWindowColumns","name":"phpseclib\\Net\\SSH2::getWindowColumns","doc":"Returns the number of columns for the terminal window size."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_getWindowRows","name":"phpseclib\\Net\\SSH2::getWindowRows","doc":"Returns the number of rows for the terminal window size."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_setWindowColumns","name":"phpseclib\\Net\\SSH2::setWindowColumns","doc":"Sets the number of columns for the terminal window size."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_setWindowRows","name":"phpseclib\\Net\\SSH2::setWindowRows","doc":"Sets the number of rows for the terminal window size."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method_setWindowSize","name":"phpseclib\\Net\\SSH2::setWindowSize","doc":"Sets the number of columns and rows for the terminal window size."},
        {"type":"Method","fromName":"phpseclib\\Net\\SSH2","fromLink":"phpseclib/Net/SSH2.html","link":"phpseclib/Net/SSH2.html#method__updateLogHistory","name":"phpseclib\\Net\\SSH2::_updateLogHistory","doc":"Update packet types in log history"},
            
                                                {"type":"Class","fromName":"phpseclib\\System\\SSH","fromLink":"phpseclib/System/SSH.html","link":"phpseclib/System/SSH/Agent.html","name":"phpseclib\\System\\SSH\\Agent","doc":"Pure-PHP ssh-agent client identity factory"},
                                {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent","fromLink":"phpseclib/System/SSH/Agent.html","link":"phpseclib/System/SSH/Agent.html#method___construct","name":"phpseclib\\System\\SSH\\Agent::__construct","doc":"Default Constructor"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent","fromLink":"phpseclib/System/SSH/Agent.html","link":"phpseclib/System/SSH/Agent.html#method_requestIdentities","name":"phpseclib\\System\\SSH\\Agent::requestIdentities","doc":"Request Identities"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent","fromLink":"phpseclib/System/SSH/Agent.html","link":"phpseclib/System/SSH/Agent.html#method_startSSHForwarding","name":"phpseclib\\System\\SSH\\Agent::startSSHForwarding","doc":"Signal that agent forwarding should\nbe requested when a channel is opened"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent","fromLink":"phpseclib/System/SSH/Agent.html","link":"phpseclib/System/SSH/Agent.html#method__request_forwarding","name":"phpseclib\\System\\SSH\\Agent::_request_forwarding","doc":"Request agent forwarding of remote server"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent","fromLink":"phpseclib/System/SSH/Agent.html","link":"phpseclib/System/SSH/Agent.html#method__on_channel_open","name":"phpseclib\\System\\SSH\\Agent::_on_channel_open","doc":"On successful channel open"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent","fromLink":"phpseclib/System/SSH/Agent.html","link":"phpseclib/System/SSH/Agent.html#method__forward_data","name":"phpseclib\\System\\SSH\\Agent::_forward_data","doc":"Forward data to SSH Agent and return data reply"},
            
                                                {"type":"Class","fromName":"phpseclib\\System\\SSH\\Agent","fromLink":"phpseclib/System/SSH/Agent.html","link":"phpseclib/System/SSH/Agent/Identity.html","name":"phpseclib\\System\\SSH\\Agent\\Identity","doc":"Pure-PHP ssh-agent client identity object"},
                                {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent\\Identity","fromLink":"phpseclib/System/SSH/Agent/Identity.html","link":"phpseclib/System/SSH/Agent/Identity.html#method___construct","name":"phpseclib\\System\\SSH\\Agent\\Identity::__construct","doc":"Default Constructor."},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent\\Identity","fromLink":"phpseclib/System/SSH/Agent/Identity.html","link":"phpseclib/System/SSH/Agent/Identity.html#method_setPublicKey","name":"phpseclib\\System\\SSH\\Agent\\Identity::setPublicKey","doc":"Set Public Key"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent\\Identity","fromLink":"phpseclib/System/SSH/Agent/Identity.html","link":"phpseclib/System/SSH/Agent/Identity.html#method_setPublicKeyBlob","name":"phpseclib\\System\\SSH\\Agent\\Identity::setPublicKeyBlob","doc":"Set Public Key"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent\\Identity","fromLink":"phpseclib/System/SSH/Agent/Identity.html","link":"phpseclib/System/SSH/Agent/Identity.html#method_getPublicKey","name":"phpseclib\\System\\SSH\\Agent\\Identity::getPublicKey","doc":"Get Public Key"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent\\Identity","fromLink":"phpseclib/System/SSH/Agent/Identity.html","link":"phpseclib/System/SSH/Agent/Identity.html#method_setSignatureMode","name":"phpseclib\\System\\SSH\\Agent\\Identity::setSignatureMode","doc":"Set Signature Mode"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent\\Identity","fromLink":"phpseclib/System/SSH/Agent/Identity.html","link":"phpseclib/System/SSH/Agent/Identity.html#method_setHash","name":"phpseclib\\System\\SSH\\Agent\\Identity::setHash","doc":"Set Hash"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent\\Identity","fromLink":"phpseclib/System/SSH/Agent/Identity.html","link":"phpseclib/System/SSH/Agent/Identity.html#method_sign","name":"phpseclib\\System\\SSH\\Agent\\Identity::sign","doc":"Create a signature"},
        {"type":"Method","fromName":"phpseclib\\System\\SSH\\Agent\\Identity","fromLink":"phpseclib/System/SSH/Agent/Identity.html","link":"phpseclib/System/SSH/Agent/Identity.html#method__string_shift","name":"phpseclib\\System\\SSH\\Agent\\Identity::_string_shift","doc":"String Shift"},
            
                                // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Doctum = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Doctum.injectApiTree($('#api-tree'));
    });

    return root.Doctum;
})(window);

$(function() {

        // Enable the version switcher
    $('#version-switcher').on('change', function() {
        window.location = $(this).val()
    });
    var versionSwitcher = document.getElementById('version-switcher');
    if (versionSwitcher) {
        var versionToSelect = document.evaluate(
            '//option[@data-version="2.0"]',
            versionSwitcher,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (versionToSelect && typeof versionToSelect.selected === 'boolean') {
            versionToSelect.selected = true;
        }
    }
    
    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').on('click', function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Doctum.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


